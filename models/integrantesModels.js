const { v4: uuidv4 } = require('uuid');
const database = require("../db/db");

class integrantesModels{
    //Buscar todos
    async todos(){
        try{
            const connection = await database.getConnection();
            const result = await connection.query("SELECT integrantes.id_integrante, integrantes.nombre_integrante, equipos.nombre_equipo FROM integrantes, equipos WHERE integrantes.id_equipo = equipos.id_equipo");
            return result;
        } catch(error){
            return ("Error en la consulta.....");
        }
    }
    //Buscar por ID
     async buscarID(id){
       try {
            const connection = await database.getConnection();
            const result = await connection.query("SELECT integrantes.id_integrante, integrantes.nombre_integrante, equipos.nombre_equipo FROM integrantes, equipos WHERE integrantes.id_equipo = equipos.id_equipo AND integrantes.id_integrante=?",id);
            if (result.length==0){
                return ("Integrante no Encontrado....");
            }
            return result;

        } catch (error) {
            return ("Error en la consulta.....");
        }
    }
    //Crear
    async crear(nuevoint){
        try {
            //const id = uuidv4();
            //const id=usuario.id;
            const nombre_integrante = nuevoint.nombre_integrante;
            const id_equipo=nuevoint.id_equipo;
            const datos ={nombre_integrante,id_equipo};
            if (nombre_integrante === undefined ) {
                return ("Nombre requerido..." );
            }
            const connection = await database.getConnection();
            await connection.query("INSERT INTO integrantes SET ?", datos);
            return ("Integrante ingresado con exito...");
        } catch (error) {
            return ("Error en la consulta.....");
        }
    }
    //Modificar
    async modificar(id, nuevoint){
        try {
            if (id === undefined || nuevoint.nombre_integrante === undefined || nuevoint.id_equipo===undefined) {
                return ("Datos Incompletos.." );
            }
            const datos = {nuevoint};
            const connection = await database.getConnection();
            const result = await connection.query("UPDATE integrantes SET ? WHERE id_integrante=?", [nuevoint,id]);
            return result;
        } catch (error) {
            return ("Error en la consulta.....");
        }
    }

    //Eliminar
    async eliminar(id){
        try {
            const connection = await database.getConnection();
            const result = await connection.query("DELETE FROM integrantes WHERE id_integrante = ?", id);
            if (result.affectedRows==0){
                return ("Integrante no Encontrado....");
            }
            return result;
        } catch (error) {
            return ("Error en la consulta.....");
        }
    }
};

module.exports = new integrantesModels();