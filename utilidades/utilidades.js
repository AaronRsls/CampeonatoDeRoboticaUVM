const bcryptjs = require("bcryptjs");
const dotenv = require("dotenv");
dotenv.config();

const secreto = process.env.SECRET;

const encriptar = async (passwordPlain) => {
    const hash = await bcryptjs.hash(passwordPlain, 10)
    return hash
};

const comparar = async (passwordPlain, hashPassword) => {
    return await bcryptjs.compare(passwordPlain, hashPassword)
};

module.exports = { encriptar, comparar};