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
};
module.exports = new modalidadModels();