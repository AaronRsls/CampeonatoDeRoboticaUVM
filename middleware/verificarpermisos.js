const database = require("../db/db");
const { verificarToken } = require('../utilidades/utilidades');

const verificarPermisos = (rol) => async (req, res, next) => {
    try {
        const token = req.headers.autorizacion;
        const tokenData = await verificarToken(token);
        const connection = await database.getConnection();
        const result = await connection.query("SELECT * FROM usersdb WHERE id = ?",tokenData.id);
        //if (rolper==result[0].rol) { 
        console.log([].concat(rol));
        console.log(result[0].rol);
        if ([].concat(rol).includes(result[0].rol)) {   
           next()
        } else {
            res.status(409)
            res.send({ error: 'No tienes permisos' })
        }

    } catch (e) {
        console.log(e)
        res.status(409)
        res.send({ error: 'No puedes Accesar...' })
    }

}

module.exports = verificarPermisos