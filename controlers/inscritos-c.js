var inscritosModels = require('../models/inscritosModels'); 

class inscritosController {
    async todos() {
        return await inscritosModels.todos();
    }
    async uno(id) {
        return await inscritosModels.buscarID(id);
    }
    async crear(inscrito) {
       return await inscritosModels.crear(inscrito);
    }
    async modificar(id, nuevoInscrito) {
        return await inscritosModels.modificar(id, nuevoInscrito);
    }
    async eliminar(id) {
        return await inscritosModels.eliminar(id);
    }
};

module.exports = new inscritosController();