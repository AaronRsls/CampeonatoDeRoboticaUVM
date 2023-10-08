var usersModels = require('../models/usersModels'); 

class usuariosController {
    todos () {
        return usersModels.todos();
    }
    uno(id) {
        return usersModels.buscarID(id);
    }
    crear(usuario) {
        usersModels.crear(usuario);
    }
    modificar(id, nuevoNombre) {
        return usersModels.modificar(id, nuevoNombre);
    }
    eliminar(id) {
        return usersModels.eliminar(id);
    }
};

module.exports = new usuariosController();