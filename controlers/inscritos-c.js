const database = require("../db/db");

//*********************************************************** */
// Clase para manejo de CRUD de Inscripciones
//********************************************************** */
class inscritosController {
  
    // Metodo encargado de listar Inscritos
    async todos (req,res) {
        try{
            const connection = await database.getConnection();
            const arrayinscritos = await connection.query("SELECT inscritos.id_inscrito, equipos.nombre_equipo, categorias.nombre_cat FROM inscritos INNER JOIN equipos ON inscritos.id_equipo = equipos.id_equipo INNER JOIN categorias on inscritos.id_cat=categorias.id_cat");
            res.render('inscritos',{arrayinscritos});
        } catch(error){
            res.redirect('/');
        }
    }
    
    // Metodo encargado de buscar Inscritos por id
    async uno(req, res) {
        try {
            const connection = await database.getConnection();
            const result = await connection.query("SELECT inscritos.id_inscrito, inscritos.id_equipo, inscritos.id_cat, equipos.nombre_equipo, categorias.nombre_cat FROM inscritos LEFT JOIN equipos ON inscritos.id_equipo = equipos.id_equipo LEFT JOIN categorias on inscritos.id_cat = categorias.id_cat WHERE inscritos.id_inscrito=?",req.params.id);
            if (result.length == 0) {
                res.json("Inscripción no Existe....");
            }
            const connection2 = await database.getConnection();
            const listaequipos = await connection2.query("SELECT * from equipos");
            const connection3 = await database.getConnection();
            const listacat = await connection3.query("SELECT * from categorias");
            res.render('editarinscrito', {inscrito: result[0],listaequipos,listacat});;
        } catch (error) {
            res.json("Error en la consulta.....");
        }
    }

    // Metodo encargado de Generar un listado de equipos y uno de categorías para el select
    async crear(req,res) {
        const connection = await database.getConnection();
        const listaequipos = await connection.query("SELECT * from equipos");
        const connection2 = await database.getConnection();
        const listacat = await connection2.query("SELECT * from categorias");
        res.render('crearinscritos',{listaequipos,listacat});
        
    }
    // Metodo para insertar una nueva inscripción
    async nuevo(req,res) {
            try {
                const connection = await database.getConnection();
                await connection.query("INSERT INTO inscritos SET ?", req.body);
                res.redirect('/inscrito');
            } catch (error) {
                res.send("Error en la consulta.....");
            }
    }
   
    // Metodo para actualizar una inscrpción
    async modificar(req, res) {
        try {
            const id = req.params.id;
            const id_equipo = req.body.id_equipo;
            const id_cat = req.body.id_cat;
            const datos = {id_equipo, id_cat};
            const connection = await database.getConnection();
            const result = await connection.query("UPDATE inscritos SET ?  WHERE id_inscrito = ?", [datos, id]);
            res.redirect('/inscrito');
        } catch (error) {
            res.json("Error en la consulta.....");
        }
    }

    // Metodo para eliminar una inscripción
    async eliminar(req, res) {
        try {
            const connection = await database.getConnection();
            const result = await connection.query("DELETE FROM inscritos WHERE id_inscrito = ?", req.params.id);
            if (result.affectedRows == 0) {
                res.json("Inscripción no Encontrada....");
            }
            res.redirect("/inscrito");
        } catch (error) {
            res.json("Error en la consulta.....");
        }
    }

};

module.exports = new inscritosController();