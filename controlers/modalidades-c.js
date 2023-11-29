const database = require("../db/db");

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

};

module.exports = new modalidadesController();