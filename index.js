// ping-bot/index.js

const express = require("express");
const fetch = require("node-fetch");
const app = express();

const PORT = process.env.PORT || 3000;
const REPLIT_URL = "https://otuzbirdeneme2.onrender.com"; // 👈 burayı değiştir!

app.get("/", (req, res) => {
  res.send("Ping bot aktif ✅");
});

app.listen(PORT, () => {
  console.log(`Ping bot ${PORT} portunda çalışıyor.`);
});

setInterval(() => {
  fetch(REPLIT_URL)
    .then(() => console.log("🔁 Replit pinglendi"));

  fetch("https://otuzbirdenem3.onrender.com/") // 👈 kendi Render URL’n olacak
    .then(() => console.log("🔁 Render pinglendi"));
}, 60 * 1000);
