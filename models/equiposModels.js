const { v4: uuidv4 } = require('uuid');

let equipoDB = [
{
    nombre: "Carvajal",
    id: "50",
    categoría: "Sumo"
},
{   nombre: "Valera",
    id: "62",
    categoría: "Seguidor de línea"
},
{
    nombre: "Trujillo",
    id: "81",
    categoría: "Estudia el el problema y presenta un prototipo que represente el problema y la solución"
}
];

class equipoModels{
    //Buscar todos
    todos(){
       return equipoDB;
    }
    //Buscar por ID
    buscarID(id){
       const equipoid = equipoDB.find (equipo => equipo.id === id);
       return equipoid
    }
    //Crear
    crear(equipo){
        equipo.id = uuidv4();
        equipoDB.push(equipo)
    }
    //Modificar
    modificar(id, nuevoNombre){
        const equipo = equipoDB.find (equipo => equipo.id === id);
        if (equipo) {
        equipo.nombre = nuevoNombre;
        return equipoDB;
    }
    }
    //Eliminar
    eliminar(id){
        const equipoEliminado = equipoDB.filter (equipo => equipo.id !== id);
        return equipoEliminado;
    }
};
module.exports = new equipoModels();