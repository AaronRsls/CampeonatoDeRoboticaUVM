const database = require("../db/db");

//*********************************************************** */
// Clase para manejar CRUD de Modalidades
//********************************************************** */
class modalidadesController {
   
    // Metodo encargado de listar Modalidades
    async todos(req,res) {
        try{
            const connection = await database.getConnection();
            var arraymodalidades = await connection.query("SELECT * from modalidades");
            res.render('modalidades',{arraymodalidades});
        } catch(error){
            res.redirect('/');
        }
    }
    
    // Metodo encargado de buscar Modalidad por id
    async uno(req,res) {
        try {
            const connection = await database.getConnection();
            const result = await connection.query("SELECT * FROM modalidades WHERE id_mod = ?",req.params.id);
            if (result.length==0){
                res.send("Modalidad no Existe....");
            }
            res.render('editarmodalidad',{modalidad:result[0]});;
        } catch (error) {
            res.send("Error en la consulta.....");
        }    
    }
    
    // Metodo encargado de renderizar la vista para el formulario de ingreso de Modelidades
    async crear(req,res) {
        res.render('crearmodalidad');
    }

    // Metodo para insertar un nuevo registro a Modalidades
    async nueva(req,res) {
            try {
                const connection = await database.getConnection();
                await connection.query("INSERT INTO modalidades SET ?", req.body);
                res.redirect('/modalidad');
            } catch (error) {
                res.send("Error en la consulta.....");
            }
    }

    // Metodo para actualizar una Modalidad seleccionada
    async modificar(req,res) {
        try {            
            const id=req.params.id;
            const modalidad=req.body.nombre_mod;
            if (id === undefined || modalidad === undefined) {
                res.send("Datos Incompletos.." );
            }
            const datos = {modalidad};
            const connection = await database.getConnection();
            const result = await connection.query("UPDATE modalidades SET nombre_mod= ? WHERE id_mod = ?", [modalidad,id]);
            res.redirect('/modalidad');
        } catch (error) {
            res.send("Error en la consulta.....");
        }
    }

    // Metodo para eliminar una Modalidad
    async eliminar(req,res) {
        try {
            const connection = await database.getConnection();
            const result = await connection.query("DELETE FROM modalidades WHERE id_mod = ?", req.params.id);
            if (result.affectedRows==0){
                res.send("Modalidad no Encontrado....");
            }
            res.redirect('/modalidad');
        } catch (error) {
            res.send("Error en la consulta.....");
        }
    }
};

module.exports = new modalidadesController();