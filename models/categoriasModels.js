const { v4: uuidv4 } = require('uuid');
const database = require("../db/db");

class categoriaModels{
    //Buscar todos
    async todos(){
        try{
            const connection = await database.getConnection();
            const result = await connection.query("SELECT categorias.id_cat, categorias.nombre_cat, modalidades.nombre_mod FROM categorias, modalidades WHERE categorias.id_mod = modalidades.id_mod");
            return result;
        } catch(error){
            return ("Error en la consulta.....");
        }
    }
    //Buscar por ID
     async buscarID(id){
       try {
            const connection = await database.getConnection();
            const result = await connection.query("SELECT categorias.id_cat, categorias.nombre_cat, modalidades.nombre_mod FROM categorias, modalidades WHERE categorias.id_mod = modalidades.id_mod AND categorias.id_cat=?",id);
            if (result.length==0){
                return ("Categoría no Encontrada....");
            }
            return result;

        } catch (error) {
            return ("Error en la consulta.....");
        }
    }
    //Crear
    async crear(nuevacat){
        try {
            //const id = uuidv4();
            //const id=usuario.id;
            const nombre_cat = nuevacat.nombre_cat;
            const id_mod=nuevacat.id_mod;
            const datos ={nombre_cat,id_mod};
            if (nombre_cat === undefined ) {
                return ("Nombre requerido..." );
            }
            const connection = await database.getConnection();
            await connection.query("INSERT INTO categorias SET ?", datos);
            return ("Usuario ingresado con exito...");
        } catch (error) {
            return ("Error en la consulta.....");
        }
    }
    //Modificar
    async modificar(id, nuevacat){
        try {
            if (id === undefined || nuevacat.nombre_cat === undefined || nuevacat.id_mod===undefined) {
                return ("Datos Incompletos.." );
            }
            const datos = {nuevacat};
            const connection = await database.getConnection();
            const result = await connection.query("UPDATE categorias SET ? WHERE id_cat=?", [nuevacat,id]);
            return result;
        } catch (error) {
            return ("Error en la consulta.....");
        }
    }

    //Eliminar
    async eliminar(id){
        try {
            const connection = await database.getConnection();
            const result = await connection.query("DELETE FROM categorias WHERE id_cat = ?", id);
            if (result.affectedRows==0){
                return ("Categoría no Encontrada....");
            }
            return result;
        } catch (error) {
            return ("Error en la consulta.....");
        }
    }
};

module.exports = new categoriaModels();