import express from "express";
import fetch from "node-fetch";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(express.json());

// ✅ Serve frontend (public folder)
app.use(express.static("public"));

// ✅ Home route → load index.html
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// ✅ Telegram Bot credentials (from Render Environment Variables)
const BOT_TOKEN = process.env.BOT_TOKEN;
const CHAT_ID = process.env.CHAT_ID;

// ✅ API route to handle support form
app.post("/send", async (req, res) => {
  const { name, whatsapp, message } = req.body;

  const text = `
📩 *New Support Request*
👤 Name: ${name}
📱 WhatsApp: ${whatsapp || "N/A"}
📝 Message: ${message}
`;

  try {
    await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: CHAT_ID,
        text: text,
        parse_mode: "Markdown"
      })
    });
    res.status(200).send({ ok: true });
  } catch (err) {
    res.status(500).send({ ok: false, error: err.message });
  }
});

// ✅ Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
