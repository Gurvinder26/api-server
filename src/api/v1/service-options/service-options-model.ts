import * as mongoose from 'mongoose';

const serviceOptionSchema: mongoose.Schema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    type: { type: String, required: true },
    time: { type: Number, required: true }
});

export const serviceOption: mongoose.Model<mongoose.Document> = mongoose.model('Service-Option', serviceOptionSchema);