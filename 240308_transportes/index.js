// 1. IMPORTAR LIBRERIAS O VARIABLES EXTERNAS
const express = require('express'); // esto es un import (nos traemos código de fuera del archivo)
const {connectMongo} = require('./utils/db')


const { roomRouter } = require('./src/routes/bike.routes');

// 2. CONFIGURACIÓN DE LA APLICACIÓN
const PORT = 3000;
connectMongo();
const app = express();



// 3. ENDPOINTS


app.get('/', (request, response) => {
    response.status(200).json({
        status: 200,
        message: "Bienvenido a mi app"
    });
});

app.use('/room', roomRouter);
//app.use('/private', privateRouter);

// 4. MANEJO DE ERRORES
/* MANEJO DE ERRORES */
app.use((request, response, next) => {
    let error = new Error();
    error.status = 404;
    error.message = 'Not Found';
    next(error);
});
app.use((error, request, response, next) => {
    return response.status(error.status || 500).json(error.message || 'Unexpected error');
});

// 5. FUNCIÓN DE INICIO

app.listen(PORT, () => {
    console.log(`app running in port ${PORT}`);
});