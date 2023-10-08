const { v4: uuidv4 } = require('uuid');

let categoriaDB = [
{
    nombre: "Sumo",
    id: "302",
},
{   
    nombre: "Incapacidad",
    id: "221",

},
{
    nombre: "Seguidor de línea",
    id: "201",
},
{
    nombre: "Recolección de objetos",
    id: "209",
},
{
    nombre: "Estudia el el problema y presenta un prototipo que represente el problema y la solución",
    id: "78",
}
];

class categoriaModels{
    //Buscar todos
    todos(){
       return categoriaDB;
    }
    //Buscar por ID
    buscarID(id){
       const categoriaid = categoriaDB.find (categoria => categoria.id === id);
       return categoriaid
    }
    //Crear
    crear(categoria){
        categoria.id = uuidv4();
        categoriaDB.push(categoria);
    }
    //Modificar
    modificar(id, nuevaCategoria){
        const categoria = categoriaDB.find (categoria => categoria.id === id);
        if (categoria) {
        categoria.nombre = nuevaCategoria;
        return categoriaDB;
    }
    }
    //Eliminar
    eliminar(id){
        const categoriaEliminada = categoriaDB.filter (categoria => categoria.id !== id);
        return categoriaEliminada;
    }
};
module.exports = new categoriaModels();