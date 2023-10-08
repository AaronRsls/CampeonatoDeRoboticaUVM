const { v4: uuidv4 } = require('uuid');

let patrocinanteDB = [
{
    nombre: "KEL",
    id: "920",
},
{   
    nombre: "Makroval",
    id: "128",
},
{
    nombre: "JP Gourmet",
    id: "51",
},
{
    nombre: "Inpro Andes",
    id: "251",
}
];

class patrocinanteModels{
    //Buscar todos
    todos(){
       return patrocinanteDB;
    }
    //Buscar por ID
    buscarID(id){
       const patrocinanteid = patrocinanteDB.find (patrocinante => patrocinante.id === id);
       return patrocinanteid
    }
    //Crear
    crear(patrocinante){
        patrocinante.id = uuidv4();
        patrocinanteDB.push(patrocinante)
    }
    //Modificar
    modificar(id, nuevoPatrocinante){
        const patrocinante = patrocinanteDB.find (patrocinante => patrocinante.id === id);
        if (patrocinante) {
        patrocinante.nombre = nuevoPatrocinante;
        return patrocinanteDB;
    }
    }
    //Eliminar
    eliminar(id){
        const patrocinanteEliminado = patrocinanteDB.filter (patrocinante => patrocinante.id !== id);
        return patrocinanteEliminado;
    }
};
module.exports = new patrocinanteModels();