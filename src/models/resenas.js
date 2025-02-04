import mongoose from "mongoose";

const schema = new mongoose.Schema({
  urlImage: String,
  date: String,
});

delete mongoose.connection.models["Resenas"];

export default mongoose.model.Resenas || mongoose.model("Resenas", schema);
