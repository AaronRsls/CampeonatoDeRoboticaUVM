const database = require("../db/db");

//*********************************************************** */
// Clase para manejos de CRUD de Categorías
//********************************************************** */
class categoriasController {
    // Metodo encargado de listar Categorías
    async todos (req,res) {
        try{
            const connection = await database.getConnection();
            const arraycategorias = await connection.query("SELECT categorias.id_cat, categorias.nombre_cat, modalidades.nombre_mod FROM categorias, modalidades WHERE categorias.id_mod = modalidades.id_mod");
            res.render('categorias',{arraycategorias});
        } catch(error){
            res.redirect('/');
        }
    }
    // Metodo encargado de buscar Categoría por id
    async uno(req,res) {
        try {
            const connection = await database.getConnection();
            const result = await connection.query("SELECT categorias.id_cat, categorias.nombre_cat, modalidades.id_mod, modalidades.nombre_mod FROM categorias, modalidades WHERE categorias.id_mod = modalidades.id_mod AND categorias.id_cat=?",req.params.id);
            if (result.length==0){
                res.json("Categoría no Existe....");
            }
            const connection2 = await database.getConnection();
            const listamod = await connection2.query("SELECT * from modalidades");
            res.render('editarcategoria',{categoria:result[0],listamod});;
        } catch (error) {
            res.json("Error en la consulta.....");
        }    
    }

    // Metodo encargado de Generar un listado de Modalidades para generar un select
    async crear(req,res) {
        const connection = await database.getConnection();
        const listamod = await connection.query("SELECT * from modalidades");
        res.render('crearcategoria',{listamod});
    }

    // Metodo para insertar un nuevo registro a Categorías
    async nueva(req,res) {
            try {
                const connection = await database.getConnection();
                await connection.query("INSERT INTO categorias SET ?", req.body);
                res.redirect('/categoria');
            } catch (error) {
                res.send("Error en la consulta.....");
            }
    }

    // Metodo para actualizar una categoria seleccionada
    async modificar(req,res) {
        try {            
            const id=req.params.id;
            const nombre_cat=req.body.nombre_cat;
            const id_mod=req.body.id_mod;
            console.log("datos recibidos: ",nombre_cat, id_mod);
            const datos = {nombre_cat,id_mod};
            const connection = await database.getConnection();
            const result = await connection.query("UPDATE categorias SET ? WHERE id_cat = ?", [datos,id]);
            res.redirect('/categoria');
        } catch (error) {
            res.send("Error en la consulta.....");
        }
    }

    // Metodo para eliminar una categoria seleccionada
    async eliminar(req,res) {
        try {
            const connection = await database.getConnection();
            const result = await connection.query("DELETE FROM categorias WHERE id_cat = ?", req.params.id);
            if (result.affectedRows==0){
                res.json("Categoría no Encontrada....");
            }
            res.redirect("/categoria");
        } catch (error) {
            res.json("Error en la consulta.....");
        }
    }
};

module.exports = new categoriasController();