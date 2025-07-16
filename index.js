// ping-bot/index.js

const express = require("express");
const fetch = require("node-fetch");
const app = express();

const PORT = process.env.PORT || 3000;
const REPLIT_URL = "https://95f75f03-f2f2-40eb-a0b1-abc482b9d3e6-00-w3pl85uymqal.pike.replit.dev:8080/"; // 👈 burayı değiştir!

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
