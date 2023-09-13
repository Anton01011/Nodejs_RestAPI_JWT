// Importar el módulo router de Express 
import {Router} from 'express'
const router = Router()

// Importar el controlador de productos 
import * as productsCtrl from '../controllers/products.controller'

// Definir rutas y asociarlas a funciones de controlador 

// Ruta POST para obtener productos 
router.post('/', productsCtrl.createProduct)

// Ruta GET para obtener productos 
router.get('/', productsCtrl.getProducts)

// Ruta GET para obtener un producto por su ID 
router.get('/:productId', productsCtrl.getProductById)

// Ruta para actualizar un producto por su ID 
router.put('/:productId', productsCtrl.updateProductByID)

// Ruta para eliminar un producto por su ID 
router.delete('/:productId', productsCtrl.deleteProductById)

// Exportar el enrutador 
export default router;