const database = require("../db/db");
const { encriptar, comparar} = require("../utilidades/utilidades");

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
    async crear(usuario1){
        try {
            const usuario=usuario1.usuario;
            const connection = await database.getConnection();
            const result = await connection.query("SELECT * FROM usersdb WHERE usuario = ?",usuario);
            if (result.length>0){
                return ("Usuario ya Existe....");
            }
            else{
                const password = await encriptar(usuario1.password);
                const rol=usuario1.rol || 1;
                const datos1 ={usuario,password,rol};
                await connection.query("INSERT INTO usersdb SET ?", datos1);
                return ("Usuario ingresado con exito...")
            }
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