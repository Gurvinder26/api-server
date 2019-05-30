import * as mongoose from 'mongoose';

const carInfoSchema: mongoose.Schema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    vin: {type: Number, required: false},
    make: { type: String, required: true },
    model: { type: String, required: true },
    year: { type: Number, required: true },
    mileage: { type: Number, required: true },
    ownerId: {type: String}
});

export const CarInfo: mongoose.Model<mongoose.Document> = mongoose.model('CarInfo', carInfoSchema);