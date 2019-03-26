const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
_id: mongoose.Schema.Types.ObjectId,
firstName: String,
middleName: String,
lastName: String,
Address: String,
phone: Number,
email: String
});

module.exports = mongoose.model('User', userSchema);