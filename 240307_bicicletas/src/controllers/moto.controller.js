


const getMoto = async (req, res, next) => {
    res.status(200).json({
        status: 200,
        message: 'has hecho un get en moto'
    });
}

const createMoto = async (req, res, next) => {
    res.status(201).json({
        status: 201,
        message: 'has hecho un post en moto'
    });
}


const updateMoto = async (req, res, next) => {
    res.status(201).json({
        status: 201,
        message: 'has hecho un patch  en moto'
    });
}


const deleteMoto = async (req, res, next) => {
    res.status(200).json({
        status: 200,
        message: 'has hecho un delete en moto'
    });
}


module.exports = { getMoto, createMoto, updateMoto, deleteMoto }