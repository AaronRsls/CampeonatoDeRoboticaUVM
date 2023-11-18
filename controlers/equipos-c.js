var equipoModels = require('../models/equiposModels'); 

class equiposController {
    async todos () {
        return await equipoModels.todos();
    }
    async uno(id) {
        return await equipoModels.buscarID(id);
    }
    async crear(equipo) {
        return await equipoModels.crear(equipo);
    }
    async modificar(id, nuevoEquipo) {
        return await equipoModels.modificar(id, nuevoEquipo);
    }
    async eliminar(id) {
        return await equipoModels.eliminar(id);
    }
};

module.exports = new equiposController();