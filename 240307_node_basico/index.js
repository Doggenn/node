// 1. IMPORTAR LIBRERIAS O VARIABLES EXTERNAS
const express = require('express');// Esto es la importacion de un archivo a nuestro codigo.
const { bikeRouter } = require('./src/routes/bike.routes');

// 2. CONFIGURACION DE LA APLICACION
const PORT = 3000;// La llamada de un puerto de escucha.

const app = express();

//3. ENDPOINTS
app.get('/', (request, response) =>{
    response.status(200).json({
        status: 200,
        message: "Bienvenido a mi app"
    })
})
app.use('/bike',)

// 4. MANEJO DE ERRORES



// 5. FUNCION DE INICIO
app.listen(PORT, () => {
console.log(`app running in port ${PORT}`);
});