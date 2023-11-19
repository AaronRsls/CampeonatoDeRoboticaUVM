var integrantesModels = require('../models/integrantesModels'); 

class integrantesController {
    async todos() {
        return await integrantesModels.todos();
    }
    async uno(id) {
        return await integrantesModels.buscarID(id);
    }
    async crear(integrante) {
       return await integrantesModels.crear(integrante);
    }
    async modificar(id, nuevoIntegrante) {
        return await integrantesModels.modificar(id, nuevoIntegrante);
    }
    async eliminar(id) {
        return await integrantesModels.eliminar(id);
    }
};

module.exports = new integrantesController();