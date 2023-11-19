const database = require("../db/db");

class modalidadModels{
    //Buscar todos
    async todos(){
        try{
            const connection = await database.getConnection();
            const result = await connection.query("SELECT * from modalidades");
            return result;
        } catch(error){
            return ("Error en la consulta.....");
        }
    }
    //Buscar por ID
     async buscarID(id){
       try {
            const connection = await database.getConnection();
            const result = await connection.query("SELECT * FROM modalidades WHERE id_mod = ?", id);
            if (result.length==0){
                return ("Modalidad no Existe....");
            }
            return result;
        } catch (error) {
            return ("Error en la consulta.....");
        }
    }
    //Crear
    async crear(nuevaModalidad){
        try {
            const nombre_mod = nuevaModalidad.nombre_mod;
            const datos ={nombre_mod};
            if (nombre_mod === undefined ) {
                return ("Nombre requerido..." );
            }
            const connection = await database.getConnection();
            await connection.query("INSERT INTO modalidades SET ?", datos);
            return ("Modalidad ingresada con exito...");
        } catch (error) {
            return ("Error en la consulta.....");
        }
    }
    //Modificar
    async modificar(id, modalidad){
        try {
            if (id === undefined || modalidad === undefined) {
                return ("Datos Incompletos.." );
            }
            const datos = {modalidad};
            const connection = await database.getConnection();
            const result = await connection.query("UPDATE modalidades SET nombre_mod= ? WHERE id_mod = ?", [modalidad,id]);
            return result;
        } catch (error) {
            return ("Error en la consulta.....");
        }
    }

    //Eliminar
    async eliminar(id){
        try {
            const connection = await database.getConnection();
            const result = await connection.query("DELETE FROM modalidades WHERE id_mod = ?", id);
            if (result.affectedRows==0){
                return ("Modalidad no Encontrado....");
            }
            return result;
        } catch (error) {
            return ("Error en la consulta.....");
        }
    }
};    

module.exports = new modalidadModels();