const mongoose = require("mongoose")
mongoose.connect("mongodb://127.0.0.1:27017/green")
  .then(() => {
    console.log("MongoDB connected successfully");
  })
  .catch((error) => {
    console.error("Failed to connect to MongoDB:", error);
  });

const newSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true
    },
    password: {
      type: String,
      required: true
    }
  });

const collection = mongoose.model("collection",newSchema)

module.exports=collection