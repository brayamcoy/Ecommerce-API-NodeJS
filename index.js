const express = require('express');
const {Users} = require('./models');

const app = express();

app.listen(8000, () => {
    console.log("Servidor iniciado en el puerto 8000")
})

//Middleware
app.use(express.json());

app.get('/', (request, response) => {
    response.send("Hola mundo");
});

app.get('/api/v1/users', async(request, response) => {
    try {
        const users = await Users.findAll();
        response.json({results: users})
    } catch (error) {
        response
            .status(400)
            .json({message: "Ha ocurrido un error al mostrar los usuarios"})
    }

});

// app.get('/api/v1/users/:id', async(request, response) => {
//     try {
//         const userId = request.params.id;
//         const users = await Users.findOne({
//             where: {
//                 id: userId
//             }
//         });
//         response.json(users)
//     } catch (error) {
//         response
//             .status(400)
//             .json({message: "El usuario no existe"})
//     }
// });

app.post('/api/v1/users', async(request, response) => {
    let {
        first_name,
        last_name,
        email,
        active,
        token,
        password
    } = request.body;
    try {
        const user = await Users.create({
            first_name,
            last_name,
            email,
            active,
            token,
            password,
            created_at: new Date(),
            updated_at: new Date()
        })
        response.json({message: "Se ha agregado el usuario satisfactoriamente", user})
    } catch (error) {
        response
            .status(400)
            .json({message: "Error al agregar Usuario"})
    }

});

app.put('/api/v1/users/:id', async(request, response) => {
    let userId = request.params.id;
    let {
        first_name,
        last_name,
        email,
        active,
        token,
        password
    } = request.body;
    try {
        const users = await Users.update({
            first_name,
            last_name,
            email,
            active,
            token,
            password,
            updated_at: new Date()
        }, {
            returning: true,
            where: {
                id: userId
            }
        });
        const user = users[1][0].dataValues;
        response.json(user);
    } catch (error) {
        response
            .status(400)
            .json({message: "No se ha podido actualizar el registro"});
    }
});

app.delete('/api/v1/users/:id', async(request, response) => {
    let userId = request.params.id;
    let user = await Users.destroy({
        where: {
            id: userId
        }
    });
    response.json({message: "El registro se ha eliminado correctamente", user});
});
