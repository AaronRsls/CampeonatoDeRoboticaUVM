var modalidadModels = require('../models/modalidadesModels'); 

class modalidadesController {
    todos () {
        return modalidadModels.todos();
    }
    uno(id) {
        return modalidadModels.buscarID(id);
    }
    crear(modalidad) {
        modalidadModels.crear(modalidad);
    }
};

module.exports = new modalidadesController();