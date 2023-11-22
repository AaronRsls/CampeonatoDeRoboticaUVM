const jwt = require('jsonwebtoken')
const dotenv = require("dotenv");
dotenv.config();

const secreto = process.env.SECRET;

const verificarToken = async (req, res, next) => {
    const token = req.header('autorizacion');
    if (!token) return await res.status(401).json({ error: 'Acceso denegado...Token requerido' })
    try {
        const verified = await jwt.verify(token, secreto);
        req.user = verified
        next() // continuamos
    } catch (error) {
        res.status(400).json({error: 'El Token no es Válido'})
    }
}

module.exports = verificarToken;