var categoriaModels = require('../models/categoriasModels'); 

class categoriasController {
    todos () {
        return categoriaModels.todos();
    }
    uno(id) {
        return categoriaModels.buscarID(id);
    }
    crear(categoria) {
       categoriaModels.crear(categoria);
    }
    modificar(id, nuevaCategoria) {
        return categoriaModels.modificar(id, nuevaCategoria);
    }
    eliminar(id) {
        return categoriaModels.eliminar(id);
    }
};

module.exports = new categoriasController();