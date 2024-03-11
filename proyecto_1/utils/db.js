const mongoose = require('mongoose');
//                                                                          \\// SI CAMBIAMOS ESTO VA A HA IR A OTRA PARTE DE LA BBDD
const pass = 'mongodb+srv://Doggenn:Vega2016@cluster0.5rqmgtd.mongodb.net/movies';

const connectMongo = async () => {
    try {
        const conn = await mongoose.connect(pass);
        console.log('INFO: Conexión a BD correcta:', conn.connection.name)
        /*const { name, host } = db.connection;
        console.log(`Conectado a ${name} en el servidor de ${host}`);*/
    } catch (error) {
        console.log('ERROR: (f connectMongo) ->', error.message);
    }
}

module.exports = { connectMongo };