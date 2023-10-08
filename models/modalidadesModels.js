const { v4: uuidv4 } = require('uuid');

let modalidadDB = [
{
    nombre: "Batalla de Robots",
    id: "11",
    categoría: "Sumo"
},
{   nombre: "Vehiculos Autonomos",
    id: "22",
    categoría: "Recolección de objetos"
},
{
    nombre: "Soluciones Industriales",
    id: "33",
    categoría: "Estudia el el problema y presenta un prototipo que represente el problema y la solución"
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
    //Crear Categoría
    crearcategoria (id,nuevaCategoriaM){
        const modalidad = modalidadDB.find(modalidad => modalidad.id === id)
        if (modalidad) {
            const nuevaCATE = {
                id: uuidv4(),
                Nombre: nuevaCategoriaM
            };
            modalidad.categoría.push (nuevaCATE);
            return modalidad;
        }
        return null; 
    }
};

module.exports = new modalidadModels();