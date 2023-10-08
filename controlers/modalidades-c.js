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
    modificar(id, nuevaModalidad) {
        return modalidadModels.modificar(id, nuevaModalidad);
    }
    eliminar(id) {
        return modalidadModels.eliminar(id);
    }
};

module.exports = new modalidadesController();