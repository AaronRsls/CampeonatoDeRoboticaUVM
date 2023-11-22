var authModels = require('../models/autorizacionModels'); 

class authController {
    async login(usuario) {
        return await authModels.login(usuario);
    }
    async registro(usuario) {
        return await authModels.registro(usuario);
    }
};

module.exports = new authController();