


const getCar = async (req, res, next) => {
    res.status(200).json({
        status: 200,
        message: 'has hecho un get en coche'
    });
}

const createCar = async (req, res, next) => {
    res.status(201).json({
        status: 201,
        message: 'has hecho un post en coche'
    });
}


const updateCar = async (req, res, next) => {
    res.status(201).json({
        status: 201,
        message: 'has hecho un patch  en coche'
    });
}


const deleteCar = async (req, res, next) => {
    res.status(200).json({
        status: 200,
        message: 'has hecho un delete en coche'
    });
}


module.exports = { getCar, createCar, updateCar, deleteCar }