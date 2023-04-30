import { createRequire } from "module";
const require = createRequire(import.meta.url);
global.require = require;

global.fetch = require("node-fetch");
const Unsplash = require("unsplash-js").default;
const toJson = require("unsplash-js").toJson;
const express = require("express");

const unsplash = new Unsplash({
  applicationId: "",
  secret: "",
  callbackUrl: "http://localhost:3000",
});

const app = express();

app.get("/api/photos", (req, res) => {
  unsplash.photos
    .listPhotos(req.query.start, req.query.count)
    .then(toJson)
    .then((json) => res.json(json));
});
const PORT = process.env.PORT || "8080";
app.listen(PORT, () => console.log(`Server Started on ${PORT}`));
