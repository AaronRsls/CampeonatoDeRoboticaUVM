const { v4: uuidv4 } = require('uuid');
const database = require("../db/db");

class equipoModels{
    //Buscar todos
    async todos(){
        try{
            const connection = await database.getConnection();
            const result = await connection.query("SELECT * from equipos");
            return result;
        } catch(error){
            return ("Error en la consulta.....");
        }
    }
    //Buscar por ID
     async buscarID(id){
       try {
            const connection = await database.getConnection();
            const result = await connection.query("SELECT * FROM equipos WHERE id_equipo = ?", id);
            if (result.length==0){
                return ("Equipo no Existe....");
            }
            return result;
        } catch (error) {
            return ("Error en la consulta.....");
        }
    }
    //Crear
    async crear(nuevoEquipo){
        try {
            //const id = uuidv4();
            //const id=nuevaModalidad.id;
            const nombre_equipo = nuevoEquipo.nombre_equipo;
            const datos ={nombre_equipo};
            if (nombre_equipo === undefined ) {
                return ("Nombre requerido..." );
            }
            const connection = await database.getConnection();
            await connection.query("INSERT INTO equipos SET ?", datos);
            return ("Equipos ingresado con exito...");
        } catch (error) {
            return ("Error en la consulta.....");
        }
    }
    //Modificar
    async modificar(id, equipo){
        try {
            if (id === undefined || equipo === undefined) {
                return ("Datos Incompletos.." );
            }
            const datos = {equipo};
            const connection = await database.getConnection();
            const result = await connection.query("UPDATE equipos SET nombre_equipo= ? WHERE id_equipo = ?", [equipo,id]);
            return result;
        } catch (error) {
            return ("Error en la consulta.....");
        }
    }

    //Eliminar
    async eliminar(id){
        try {
            const connection = await database.getConnection();
            const result = await connection.query("DELETE FROM equipos WHERE id_equipo = ?", id);
            if (result.affectedRows==0){
                return ("Equipo no Encontrado....");
            }
            return result;
        } catch (error) {
            return ("Error en la consulta.....");
        }
    }
};    

module.exports = new equipoModels();