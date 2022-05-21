const mongoose = require('mongoose')
const Schema = mongoose.Schema

const itemSchema = new Schema({
    name: String,
    description: String,
    price: Number,
    quantity: Number,
    product_img: String
}, {
    timestamps: true,
})

const items = mongoose.model('item', itemSchema)
module.exports = items