var patrocinanteModels = require('../models/patrocinantesModels'); 

class patrocinantesController {
    todos () {
        return patrocinanteModels.todos();
    }
    uno(id) {
        return patrocinanteModels.buscarID(id);
    }
    crear(patrocinante) {
        patrocinanteModels.crear(patrocinante);
    }
    modificar(id, nuevoPatrocinante) {
        return patrocinanteModels.modificar(id, nuevoPatrocinante);
    }
    eliminar(id) {
        return patrocinanteModels.eliminar(id);
    }
};

module.exports = new patrocinantesController();