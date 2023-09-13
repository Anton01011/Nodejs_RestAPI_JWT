// Importar los módulos y dependencias necesarios 
import express, { application } from 'express' // Importar el framework de Express
import morgan from "morgan"; // Importar Morgan para el registro de solicitudes
import pkg from '../package.json'; // Importar los datos del archivo pkg

import productsRoutes from './routes/products.routes' // Importar kas rutas para los productos

// crear una instancia de la aplicación Express 
const app = express()

// Confuguración de la applicación 
app.set('pkg', pkg); // Establecer el objeto 'pkg' en la aplicación con los datos de package.json

app.use(express.json());

// Agregar el middleware Morgan para el registro de solicitudes en modo 'dev' 
app.use(morgan('dev'));


// Ruta de InputDeviceInfo, devuelve la información básica de la applicación 
app.get('/', (req, res) => {
    res.json({
        name: app.get('pkg').name,
        author: app.get('pkg').author,
        description: app.get('pkg').description,
        version: app.get('pkg').version
    });
})

// Usar las rutas definidas para los productos bajo la ruta '/productos' 
app.use('/products',productsRoutes)

// exportar la instancia de la applicación Express 
export default app;