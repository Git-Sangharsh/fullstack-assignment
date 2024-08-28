import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import mongoose from "mongoose";

const app = express();
const port = 5000;
app.use(cors());
app.use(bodyParser.json());

mongoose
  .connect("mongodb://127.0.0.1:27017/future")
  .then(() => console.log("mongodb connected!!!"))
  .catch((err) => console.log(err));

const cardSchema = new mongoose.Schema({
  id: { type: String, required: true, unique: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
});

const Card = mongoose.model("card", cardSchema);

app.get("/", (req, res) => {
  res.send("<h1>Backed of Future Skills</h1>");
});

app.post("/cards", async (req, res) => {
  const { id, title, description } = req.body;
  if (!id || !title || !description) {
    return res.status(400).json({ message: "All Fileds Are Required!!!" });
  }
  try {
    const newCard = new Card({ id, title, description });
    await newCard.save();
    return res.status(200).json({ message: "Card Added Successfully!" });
  } catch (err) {
    console.log(err + "err in post endpoint!!!");
    res.status(500).json({ message: "Server error, could not create card" });
  }
});

app.get("/cards", async (req, res) => {
  try {
    const cards = await Card.find();
    res.status(200).json(cards);
  } catch (error) {
    console.error("Error fetching cards:", error);
    res.status(500).json({ message: "Server error, could not fetch cards" });
  }
});

app.get("/cards/:title", async (req, res) => {
  const { title } = req.params;
  try {
    const card = await Card.findOne({ title });
    if (!card) {
      return res.status(404).json({ message: "Card not found" });
    }
    res.status(200).json(card);
  } catch (err) {
    console.log(err + "err while fetching /cards/:title endpoint!!!");
    res.status(500).json({ message: "Server error, could not fetch card" });
  }
});

app.listen(port, () => {
  console.log("server listening on port " + port);
});
