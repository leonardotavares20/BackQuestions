import express from "express";
import cors from "cors";

const app = express();

app.use(cors());

app.get("/:name/:age", (req, res) => {
  const { name, age } = req.params;
  const object = {
    name,
    age,
  };

  res.json(object);
});

app.listen(3000, () => {
  console.log("Back running on port 3000");
});
