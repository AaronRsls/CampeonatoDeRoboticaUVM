const database = require("../db/db");

class UsersModels{
    //Buscar todos
    async todos(){
        try{
            const connection = await database.getConnection();
            const result = await connection.query("SELECT * from usersdb");
            return result;
        } catch(error){
            return ("Error en la consulta.....");
        }
    }
    //Buscar por ID
     async buscarID(id){
       try {
            const connection = await database.getConnection();
            const result = await connection.query("SELECT * FROM usersdb WHERE id = ?", id);
            if (result.length==0){
                return ("Usuario no Encontrado....");
            }
            return result;

        } catch (error) {
            return ("Error en la consulta.....");
        }
    }
    //Crear
    async crear(usuario){
        try {
            const nombre = usuario.nombre;
            const datos ={nombre};
            if (nombre === undefined ) {
                return ("Nombre requerido..." );
            }
            const connection = await database.getConnection();
            await connection.query("INSERT INTO usersdb SET ?", datos);
            return ("Usuario ingresado con exito...");
        } catch (error) {
            return ("Error en la consulta.....");
        }
    }
    //Modificar
    async modificar(id, nuevoNombre){
        try {
            if (id === undefined || nuevoNombre === undefined) {
                return ("Datos Incompletos.." );
            }
            const connection = await database.getConnection();
            const result = await connection.query("UPDATE usersdb SET nombre= ? WHERE id = ?", [nuevoNombre,id]);
            return result;
        } catch (error) {
            return ("Error en la consulta.....");
        }
    }

    //Eliminar
    async eliminar(id){
        try {
            const connection = await database.getConnection();
            const result = await connection.query("DELETE FROM usersdb WHERE id = ?", id);
            if (result.affectedRows==0){
                return ("Usuario no Encontrado....");
            }
            return result;
        } catch (error) {
            return ("Error en la consulta.....");
        }
    }
};

module.exports = new UsersModels();