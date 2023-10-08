var equipoModels = require('../models/equiposModels'); 

class equiposController {
    todos () {
        return equipoModels.todos();
    }
    uno(id) {
        return equipoModels.buscarID(id);
    }
    crear(equipo) {
        equipoModels.crear(equipo);
    }
    modificar(id, nuevoEquipo) {
        return equipoModels.modificar(id, nuevoEquipo);
    }
    eliminar(id) {
        return equipoModels.eliminar(id);
    }
};

module.exports = new equiposController();