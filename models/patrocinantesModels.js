const database = require("../db/db");


//Modelos de patrocinantes enlazados a la Base de Datos con "async"
class patrocinantesModels{
    //Buscar todos
    async todos(){
        try{
            const connection = await database.getConnection();
            const result = await connection.query("SELECT * from patrocinantes");
            return result;
        } catch(error){
            return ("Error en la consulta.....");
        }
    }

    //Buscar por ID
    async buscarID(id){
        try {
            const connection = await database.getConnection();
            const result = await connection.query("SELECT * FROM patrocinantes WHERE id_patrocinante = ?", id);
            if (result.length==0){
                return ("Patrocinante no Encontrado....");
            }
            return result;

        } catch (error) {
            return ("Error en la consulta.....");
        }
    }

    //Crear
    async crear(nuevopatrocinante){
        try {
            const nombre_patrocinante = nuevopatrocinante.nombre_patrocinante;
            const nivel = nuevopatrocinante.nivel;
            const datos ={nombre_patrocinante,nivel};
            if (nombre_patrocinante === undefined ) {
                return ("Nombre requerido..." );
            }
            const connection = await database.getConnection();
            await connection.query("INSERT INTO patrocinantes SET ?", datos);
            return ("Patrocinante ingresado con exito...");
        } catch (error) {
            return ("Error en la consulta.....");
        }
    }

    //Modificar
    async modificar(id, nuevoPatrocinante){
        try {
            if (id === undefined || nuevoPatrocinante.nombre_patrocinante === undefined || nuevoPatrocinante.nivel===undefined) {
                return ("Datos Incompletos.." );
            }
            const datos = {nuevoPatrocinante};
            const connection = await database.getConnection();
            const result = await connection.query("UPDATE patrocinantes SET ? WHERE id_patrocinante=?", [nuevoPatrocinante,id]);
            return result;
        } catch (error) {
            return ("Error en la consulta.....");
        }
    }

    //Eliminar
    async eliminar(id){
        try {
            const connection = await database.getConnection();
            const result = await connection.query("DELETE FROM patrocinantes WHERE id_patrocinante = ?", id);
            if (result.affectedRows==0){
                return ("Patrocinante no Encontrado....");
            }
            return result;
        } catch (error) {
            return ("Error en la consulta.....");
        }
    }
};
module.exports = new patrocinantesModels();