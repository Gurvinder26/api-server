import * as mongoose from "mongoose";

const dealerTimingSchema: mongoose.Schema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  dealerId: { type: String, required: true },
  dayOfWeek: { type: String, required: true },
  open_time: { type: String, required: true },
  break_start_time: { type: String},
  break_end_time: {type: String},
  close_time: { type: String, required: true },
  validFrom: { type: Date },
  validTo: { type: Date }
});

export const dealerTimingList: mongoose.Model<
  mongoose.Document
> = mongoose.model("dealerTimings", dealerTimingSchema);
