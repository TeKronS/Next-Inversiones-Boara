import mongoose from "mongoose";

const schema = new mongoose.Schema({
  urlImage: String,
  title: String,
  category: String,
});

delete mongoose.connection.models["Arreglos"];

export default mongoose.model.Arreglos || mongoose.model("Arreglos", schema);
