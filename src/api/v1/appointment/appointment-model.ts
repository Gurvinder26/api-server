import * as mongoose from "mongoose";

const appointmentSchema: mongoose.Schema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  userId: { type: String, required: true },
  carId: { type: String, required: true },
  serviceOptions: { type: Array, required: true },
  date: { type: String, required: true },
  time: { type: String, required: true},
  dealerId: { type: String, required: true }
});

export const Appointment: mongoose.Model<mongoose.Document> = mongoose.model(
  "appointment",
  appointmentSchema
);
