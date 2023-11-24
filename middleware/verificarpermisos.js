const database = require("../db/db");
const { verificarToken } = require('../utilidades/utilidades');

const verificarPermisos = (rol) => async (req, res, next) => {
    try {
        const token = req.cookies.token;
        //const token = req.header.autorizacion;
        const tokenData = await verificarToken(token);
        const connection = await database.getConnection();
        const result = await connection.query("SELECT * FROM usersdb WHERE id = ?",tokenData.id);
        if ([].concat(rol).includes(result[0].rol)) {   
           next()
        } else {
            res.status(409)
            res.send({ error: 'No tienes permisos' })
        }

    } catch (e) {
        res.status(409)
        res.send({ error: 'No puedes Accesar...' })
    }

}

module.exports = verificarPermisos;