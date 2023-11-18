var usersModels = require('../models/usersModels'); 

class usuariosController {
    async todos () {
        return await usersModels.todos();
    }
    async uno(id) {
        return await usersModels.buscarID(id);
    }
    async crear(usuario) {
        return await usersModels.crear(usuario);
    }
    async modificar(id, nuevoNombre) {
        return await usersModels.modificar(id, nuevoNombre);
    }
    async eliminar(id) {
        return await usersModels.eliminar(id);
    }
};

module.exports = new usuariosController();