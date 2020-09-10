const express = require("express");
const webpush = require("web-push");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));

app.use(
  cors({
    credentials: true,
    origin: "*",
  })
);

const PORT = 8000;

let endPoint = "";

const vapidKeys = {
  publicKey:
    "BECPR1u8AXijIcSjLU6NrUCecouLKxCOvVe5nBjdoFt5IM786VYTbhT3Ux3fKcbQjSzbBAHZloOCpPnPHB-o2HU",
  privateKey: "VDZomPysZ7HJRproYXLHCOnV2r4obg9FB6jcUARMR64",
};

webpush.setVapidDetails(
  "mailto:namnt69751997@gmail.com",
  vapidKeys.publicKey,
  vapidKeys.privateKey
);

app.post("/sendEndPoint", (req, res) => {
  endPoint = req.body;

  webpush.sendNotification(endPoint, "< Push Payload String >");
});

app.listen(PORT, () => {
  console.log(`server listen on : ${PORT}`);
});
