const User = require('../models/user')
const criptografarSenha = require('../config/bcripty')
const bcrypt = require('bcrypt');

module.exports = {
    async store(req, res) {
        try {
            const { name, email, password } = req.body;
            const user = await User.findOne({
                where: {
                    email: email
                }
            });
            if (user) throw new Error("Usuário já existe");
            let passwordCriptografada = await criptografarSenha(password);
            const newUser = await User.create({ name, email, password: passwordCriptografada });
            newUser.password = undefined;
            return res.status(201).json(newUser);
        } catch (error) {
            return res.status(400).json(error.message);
        }
    },
    async index(req, res) {
        try {
            const { email, password } = req.body
            const user = await User.findOne({
                where: {
                    email: email
                }
            })
            if (!user) throw new Error("Usuario não existe")
            const passwordMatch = await bcrypt.compare(password, user.password);
            if (!passwordMatch) throw new Error("Senha incorreta");
            user.password = undefined
            return res.status(200).json(user)
        } catch (error) {
            res.status(400).json(error.message)
        }
    }
}