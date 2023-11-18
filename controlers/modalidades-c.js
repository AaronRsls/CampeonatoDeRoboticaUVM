var modalidadModels = require('../models/modalidadesModels'); 

class modalidadesController {
    async todos () {
        return await modalidadModels.todos();
    }
    async uno(id) {
        return await modalidadModels.buscarID(id);
    }
    async crear(modalidad) {
        return await modalidadModels.crear(modalidad);
    }
    async modificar(id, modalidad) {
        return await modalidadModels.modificar(id, modalidad);
    }
    async eliminar(id) {
        return await modalidadModels.eliminar(id);
    }
};

module.exports = new modalidadesController();