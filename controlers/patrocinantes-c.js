var patrocinanteModels = require('../models/patrocinantesModels'); 

class patrocinantesController {
    async todos () {
        return await patrocinanteModels.todos();
    }
    async uno(id) {
        return await patrocinanteModels.buscarID(id);
    }
    async crear(patrocinante) {
        return await patrocinanteModels.crear(patrocinante);
    }
    async modificar(id, nuevopatrocinante) {
        return await patrocinanteModels.modificar(id, nuevopatrocinante);
    }
    async eliminar(id) {
        return await patrocinanteModels.eliminar(id);
    }
};

module.exports = new patrocinantesController();