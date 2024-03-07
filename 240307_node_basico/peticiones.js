//                      Response es lo que se devuelve al cliente (Lo que responde la web al usuario)
//                      \\//

    //\\
    //          Request es la comanda del camarero (La peticion del usuario)

    
    
    


    //Valide si la bebida que pide el cliente es una de las siguientes = [fanta, agua, vino, ron]
//Si no es, decimos que no esta en el menu


//                        Response es lo que se devuelve al cliente (Lo que responde la web al usuario)
//                            \\//
app.get('/bebidas', (request, response) => {
                        //\\
          //          Request es la comanda del camarero (La peticion del usuario)
    const bebida = request.query.bebida;
    const bebidas = ['fanta', 'agua', 'vino', 'ron'];
    if (bebidas.includes(bebida)) {
        response.status(200).json({
            status: 200,
            message: `Gracias, aqui tiene su ${bebida}`
        })
    } else {
        response.status(404).json({
            status: 404,
            message: `Lo que ha pedido ${bebida} no esta disponible`
        })
    };
});

app.get('/postres', (request, response) => {
    const postre = request.query.postre;
    const postres = ['tarta', 'yogurt', 'petitsuis', 'melon'];
    if (postres.includes(postre)) {
        response.status(200).json({
            status: 200,
            message: `Gracias, aqui tiene su ${postre}`
        })
    } else {
        response.status(404).json({
            status: 404,
            message: `Lo que ha pedido ${postre} no esta disponible`
        })
    };
});

app.get('/platos', (request, response) => {
    const plato = request.query.plato;
    const platos = ['macarrones', 'albondigas', 'pizza', 'huevos'];
    if (platos.includes(plato)) {
        response.status(200).json({
            status: 200,
            message: `Gracias, aqui tiene su ${plato}`
        })
    } else {
        response.status(404).json({
            status: 404,
            message: `Lo que ha pedido ${plato} no esta disponible`
        })
    }
})
/*
app.get('/bebidas', (request, response) => {
    if (typeof bebida === 'string' || bebida instanceof String) {
        response.status(200).json({
            status: 200,
            message: `Gracias, aqui tiene su ${bebida}`
        })
    }else {
        response.status(404).json({
            status: 404,
            message: `Lo que ha pedido (${bebida}) no es una bebida`
        })
    }
})
    */