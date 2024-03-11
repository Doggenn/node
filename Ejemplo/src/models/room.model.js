const mongoose = require('mongoose');
const { productRouter } = require('../routers/room.routers');

const productSchema = new mongoose.Schema({
    type: {
        type: String,
        required: true,
        trim: true,/// Sirve para que no se queden los espacios en blanco
    },
    surface: {
        type: Number,
        required: true,
    }
})
//productRouter.get('/', getProduct);
/*productRouter.post('/', createProduct);*/

const Product = mongoose.model('Product', productSchema);
module.exports = Product;