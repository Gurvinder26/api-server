import * as mongoose from "mongoose";

const dealerSchema: mongoose.Schema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: { type: String, required: true },
  address: { type: String, required: true },
  city: { type: String, required: true },
  province: { type: String, required: true },
  country: { type: String, required: true },
  phone: { type: Number},
  email: { type: String }
});

export const dealerList: mongoose.Model<mongoose.Document> = mongoose.model(
  "dealerList",
  dealerSchema
);
