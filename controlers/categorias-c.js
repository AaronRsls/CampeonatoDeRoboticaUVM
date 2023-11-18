var categoriaModels = require('../models/categoriasModels'); 

class categoriasController {
    async todos() {
        return await categoriaModels.todos();
    }
    async uno(id) {
        return await categoriaModels.buscarID(id);
    }
    async crear(categoria) {
       return await categoriaModels.crear(categoria);
    }
    async modificar(id, nuevaCategoria) {
        return await categoriaModels.modificar(id, nuevaCategoria);
    }
    async eliminar(id) {
        return await categoriaModels.eliminar(id);
    }
};

module.exports = new categoriasController();