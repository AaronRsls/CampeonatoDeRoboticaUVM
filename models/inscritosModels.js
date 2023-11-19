const { v4: uuidv4 } = require('uuid');
const database = require("../db/db");

class inscritoModels{
    //Buscar todos
    async todos(){
        try{
            const connection = await database.getConnection();
            const result = await connection.query("SELECT inscritos.id_inscrito, equipos.nombre_equipo, categorias.nombre_cat FROM inscritos INNER JOIN equipos ON inscritos.id_equipo = equipos.id_equipo INNER JOIN categorias on inscritos.id_cat=categorias.id_cat");
            return result;
        } catch(error){
            return ("Error en la consulta.....");
        }
    }
    //Buscar por ID
     async buscarID(id){
       try {
            const connection = await database.getConnection();
            const result = await connection.query("SELECT inscritos.id_inscrito, equipos.nombre_equipo, categorias.nombre_cat FROM inscritos LEFT JOIN equipos ON inscritos.id_equipo = equipos.id_equipo LEFT JOIN categorias on inscritos.id_cat = categorias.id_cat WHERE inscritos.id_inscrito=?",id);
            if (result.length==0){
                return ("Inscripcion no Encontrada....");
            }
            return result;

        } catch (error) {
            return ("Error en la consulta.....");
        }
    }
    //Crear
    async crear(nuevoinsc){
        try {
            //const id = uuidv4();
            //const id=usuario.id;
            //const nombre_cat = nuevoinsc.nombre_cat;
            const id_equipo=nuevoinsc.id_equipo;
            const id_cat=nuevoinsc.id_cat;
            const datos ={id_equipo,id_cat};
            const connection = await database.getConnection();
            await connection.query("INSERT INTO inscritos SET ?", datos);
            return ("Inscripción realizada con exito...");
        } catch (error) {
            return ("Error en la consulta.....");
        }
    }
    //Modificar
    async modificar(id, nuevoins){
        try {
            if (id === undefined || nuevoins.id_equipo === undefined || nuevoins.id_cat===undefined) {
                return ("Datos Incompletos.." );
            }
            const datos = {nuevoins};
            const connection = await database.getConnection();
            const result = await connection.query("UPDATE inscritos SET ? WHERE id_inscrito=?", [nuevoins,id]);
            return result;
        } catch (error) {
            return ("Error en la consulta.....");
        }
    }

    //Eliminar
    async eliminar(id){
        try {
            const connection = await database.getConnection();
            const result = await connection.query("DELETE FROM inscritos WHERE id_inscrito = ?", id);
            if (result.affectedRows==0){
                return ("Inscripcion no Encontrada....");
            }
            return result;
        } catch (error) {
            return ("Error en la consulta.....");
        }
    }
};

module.exports = new inscritoModels();