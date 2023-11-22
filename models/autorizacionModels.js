const jwt = require('jsonwebtoken');
const database = require("../db/db");
const { encriptar, comparar} = require("../utilidades/utilidades");
const dotenv = require("dotenv");
dotenv.config();

const secreto = process.env.SECRET;

class authModels{
    //Iniciar sesion
     async login(body){
       try {
            const usuario=body.usuario;
            const connection = await database.getConnection();
            const result = await connection.query("SELECT * FROM usersdb WHERE usuario = ?",usuario);
            if (result.length===0){
                return ("Usuario No Existe....");
            }
            else{
                //console.log(result[0]);
                const compara = await comparar(body.password,result[0].password);
                if (!compara){
                    return ("Password Incorrecto ...");
                }
                const token = jwt.sign({id: result[0].id},secreto,{expiresIn:'1h'})
                //console.log(token);
                return ("Usuario Logeado con exito...",token);
            }
        } catch (error) {
            return ("Error en la consulta.....");
        }
    }
    //Registrar Usuario
    async registro(body){
        try {
             const usuario=body.usuario;
             const connection = await database.getConnection();
             const result = await connection.query("SELECT * FROM usersdb WHERE usuario = ?",usuario);
             if (result.length>0){
                 return ("Usuario ya Existe....");
             }
             else{
                 const password = await encriptar(body.password);
                 const rol=body.rol || 1;
                 const datos1 ={usuario,password,rol};
                 await connection.query("INSERT INTO usersdb SET ?", datos1);
                 return ("Usuario ingresado con exito...")
             }
         } catch (error) {
             return ("Error en la consulta.....");
         }
     }
};

module.exports = new authModels();