// Importamos el modelo de Product desde el archivo correspondiente 
import Product from "../models/Product"

// Controlador para crear un nuevo producto 
export const createProduct = async (req, res) => {

    const {name, category, price, imgURL} = req.body // Obtenemos los datos del cuerpo de la solicitud

    // Creamos una nueva instancia del modelo 'Product' con los datos proporcionados 
    const newProduct = new Product({ name, category, price, imgURL})

    // Creamos el nuevo producto en la base de datos y esperamos a que se complete 
    const productSaved = await newProduct.save()

    // Eviamos una respuesta con el producto guardado en formato JSON 
    res.json(productSaved)
}

export const getProducts = async (req, res) => {
    const products = await Product.find();
    res.json(products)
}

export const getProductById = (req, res) => {
    
}

export const updateProductByID = (req, res) => {
    
}

export const deleteProductById = (req, res) => {

}