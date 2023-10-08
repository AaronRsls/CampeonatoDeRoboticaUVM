const { v4: uuidv4 } = require('uuid');

let modalidadDB = [
{
    nombre: "Batalla de Robots",
    id: "11",
},
{   nombre: "Vehiculos Autonomos",
    id: "22",
},
{
    nombre: "Soluciones Industriales",
    id: "33"
}
];

class modalidadModels{
    //Buscar todos
    todos(){
       return modalidadDB;
    }
    //Buscar por ID
    buscarID(id){
       const modalidadid = modalidadDB.find (modalidad => modalidad.id === id);
       return modalidadid
    }
    //Crear
    crear(modalidad){
        modalidad.id = uuidv4();
        modalidadDB.push(modalidad)
    }
    //Modificar
    modificar(id, nuevaModalidad){
        const modalidad = modalidadDB.find (modalidad => modalidad.id === id);
        if (modalidad) {
        modalidad.nombre = nuevaModalidad;
        return modalidadDB;
    }
    }
    //Eliminar
    eliminar(id){
        const modalidadEliminada = modalidadDB.filter (modalidad => modalidad.id !== id);
        return modalidadEliminada;
    }
};
module.exports = new modalidadModels();