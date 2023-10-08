const { v4: uuidv4 } = require('uuid');

let usersDB = [
{
    nombre: "José",
    id: "123",
},
{   nombre: "Aaron",
    id: "456",
},
{
    nombre: "Alexander",
    id: "189",
}
];

class UsersModels{
    //Buscar todos
    todos(){
       return usersDB;
    }
    //Buscar por ID
    buscarID(id){
       const usuarioid = usersDB.find (usuario => usuario.id === id);
       return usuarioid
    }
    //Crear
    crear(usuario){
        usuario.id = uuidv4();
        usersDB.push(usuario)
    }
    //Modificar
    modificar(id, nuevoNombre){
        const usuario = usersDB.find (usuario => usuario.id === id);
        if (usuario) {
        usuario.nombre = nuevoNombre;
        return usersDB;
    }
    }
    //Eliminar
    eliminar(id){
        const usuarioEliminado = usersDB.filter (usuario => usuario.id !== id);
        return usuarioEliminado;
    }
};

module.exports = new UsersModels();