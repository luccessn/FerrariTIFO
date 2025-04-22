require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const ImagesModel = require("./Models/images");

const app = express();

// CORS და JSON პარამეტრები
app.use(cors());
app.use(express.json());

// MongoDB კავშირის პარამეტრები
mongoose
  .connect(process.env.MONGO_URI, {
    serverSelectionTimeoutMS: 50000, // 50 seconds timeout
  })
  .then(() => console.log("MongoDB Atlas-თან კავშირი დამყარებულია"))
  .catch((err) => console.error("MongoDB კავშირის შეცდომა:", err));

// ტესტის route
// app.get("/", (req, res) => {
//   res.send("API მუშაობს 🚀");
// });

// '/getImages' route, სადაც გადმოგვაქვს გამოსახულებები MongoDB-სგან
app.get("/getImages", (req, res) => {
  ImagesModel.find()
    .then((images) => res.json(images))
    .catch((err) => res.status(500).json({ error: err.message }));
});

// Heroku-სთვის პორტი
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`სერვერი მუშაობს პორტზე ${PORT}`);
});
