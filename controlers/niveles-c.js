const database = require("../db/db");

//*********************************************************** */
// Clase para manejos de CRUD de Niveles
//********************************************************** */
class nivelesController {
    // Metodo encargado de listar Niveles
    async todos (req,res) {
        try{
            const connection = await database.getConnection();
            const arrayniveles = await connection.query("SELECT * FROM nivel");
            res.render('niveles',{arrayniveles});
        } catch(error){
            res.redirect('/');
        }
    }
    // Metodo encargado de buscar Nivel por id
    async uno(req,res) {
        try {
            const connection = await database.getConnection();
            const result = await connection.query("SELECT * FROM nivel WHERE id_nivel = ?",req.params.id);
            if (result.length==0){
                res.send("Nivel no Existe....");
            }
            res.render('editarnivel',{nivel:result[0]});;
        } catch (error) {
            res.send("Error en la consulta.....");
        }    
    }
    
    // Metodo encargado de renderizar la vista para el formulario de ingreso de Niveles
    async crear(req,res) {
        res.render('crearnivel');
    }

    // Metodo para insertar un nuevo nivel
    async nuevo(req,res) {
            try {
                const connection = await database.getConnection();
                await connection.query("INSERT INTO nivel SET ?", req.body);
                res.redirect('/niveles');
            } catch (error) {
                res.send("Error en la consulta.....");
            }
    }

    // Metodo para actualizar un Nivel seleccionado
    async modificar(req,res) {
        try {            
            const id=req.params.id;
            const nivel=req.body.nivel;
            const costo=req.body.costo;
            if (id === undefined || nivel === undefined) {
                res.send("Datos Incompletos.." );
            }
            const datos = {nivel,costo};
            const connection = await database.getConnection();
            const result = await connection.query("UPDATE nivel SET ? WHERE id_nivel = ?", [datos,id]);
            res.redirect('/niveles');
        } catch (error) {
            res.send("Error en la consulta.....");
        }
    }

    // Metodo para eliminar un Nivel
    async eliminar(req,res) {
        try {
            const connection = await database.getConnection();
            const result = await connection.query("DELETE FROM nivel WHERE id_nivel = ?", req.params.id);
            if (result.affectedRows==0){
                res.send("Nivel no Encontrado....");
            }
            res.redirect('/niveles');
        } catch (error) {
            res.send("Error en la consulta.....");
        }
    }

};

module.exports = new nivelesController();