import express from "express";
import fetch from "node-fetch";

const app = express();
app.use(express.json());

const BOT_TOKEN = process.env.BOT_TOKEN;
const CHAT_ID = process.env.CHAT_ID;

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

app.listen(3000, () => console.log("Server running on port 3000"));
