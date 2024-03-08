// 1. IMPORTAR LIBRERIAS O VARIABLES EXTERNAS
const express = require('express'); // esto es un import (nos traemos código de fuera del archivo)
const { bikeRouter } = require('./src/routes/bike.routes');
const { motoRouter } = require('./src/routes/moto.routes');
const { carRouter } = require('./src/routes/car.routes');
const { privateRouter } = require('./src/routes/private.routes');

// 2. CONFIGURACIÓN DE LA APLICACIÓN
const PORT = 3000;

const app = express();



// 3. ENDPOINTS


app.get('/', (request, response) => {
    response.status(200).json({
        status: 200,
        message: "Bienvenido a mi app"
    });
});

app.use('/bike', bikeRouter);
app.use('/moto', motoRouter);
app.use('/car', carRouter);
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