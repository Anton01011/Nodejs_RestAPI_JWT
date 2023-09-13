// Importar la aplicación Express desde el archivo app.js 
import app from "./app";

// Importar y configurar la conexión a la base de datos MongoDB desde decodeBase64.js 
import './db'

// Iniciar el servidor Express para escuchar en el puerto 3000 
app.listen(3000);

// Mostrar un mensaje en la consola indicando que el servidor esta escuchando en ese puerto 
console.log('server listen on port', 3000); 

// He establecido cambios desde Anton:)