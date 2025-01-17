const mongoose = require('mongoose');

const UsersSchema = new mongoose.Schema({
    login: {
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
    },
    role: {
        type: Number,
        required: true
    }
});

module.exports = Users = mongoose.model('Users', UsersSchema, "Users");