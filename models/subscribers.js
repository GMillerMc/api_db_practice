const mongoose = require('mongoose')

const postSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true,
    },
    dateOfPost: {
        type: Date,
        required: true,
        default: Date.now
    }
})

module.exports = mongoose.model('Poster', postSchema)
