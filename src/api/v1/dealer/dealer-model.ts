import * as mongoose from "mongoose";

const dealerSchema: mongoose.Schema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: { type: String, required: true },
  city: { type: String, required: true },
  province: { type: String, required: true },
  country: { type: String, required: true },
  phone: { type: Number, required: true },
  email: { type: String, required: true }
});

export const dealerList: mongoose.Model<mongoose.Document> = mongoose.model(
  "dealerList",
  dealerSchema
);
