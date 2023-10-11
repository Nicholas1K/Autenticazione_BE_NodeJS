const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    nome: {
        type: String,
        required: true
    },
    cognome: {
        type: String,
        required:true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required:false,
        required: true
    },
    data:{
        type:Date,
        default:Date.now(),
    }
});

module.exports = mongoose.model('Users', UserSchema);