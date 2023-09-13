// Importar los módulos Schema y model de mongoose 
import { Schema, model } from "mongoose"

// Definir el esquema del producto 
const productSchema = new Schema ({
    name: String,     // Nombre del producto (cadena de texto)
    category: String, // Categoría del producto (cadena de texto)
    price: Number,    // Precio del producto (número)
    imgURL: String    // URL de la imagen del producto (cadena de texto)
}, {
    timestamps: true, // Agregar campos de marca de tiempo createAt y updateAt
    versionKey: false
})

// Crear y exportar el modelo Product basado en el esquema productSchema 
export default model('Product', productSchema);