import express from "express";
import mongoose from "mongoose";
import productRoute from "./routes/product.routes.js";

const app = express();
const PORT = 3000;

app.use(express.json());

app.use("/api/products", productRoute);

mongoose
  .connect(
    "mongodb+srv://kunwarnsingh41:kunwarnaunihal@cluster0.hxdbzdi.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log("Connected to database!");
  })
  .catch((error) => {
    console.log("Connection failed!", error);
  });

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
