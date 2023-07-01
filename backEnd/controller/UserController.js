const User = require('../models/user')

module.exports = {
    async store(req,res){
        try{
        const {name,email,password} = req.body
        const user = await User.findAll({
            where:{
                email: email
            }
        })
        if(user.length !== 0 )throw new Error("Usuario ja existe")
        const newUser = await User.create({name,email,password})
        newUser.password = undefined
        return res.status(201).json(newUser)
        }catch(error){
            res.status(400).json(error.message)
        }
    },
    async index(req,res){
        try {
            const {email,password} = req.body
            const user = await User.findOne({
                where:{
                    email: email
                }
            })
            if(!user) throw new Error ("Usuario não existe")
            if(password !== user.password)  throw new Error("Senha incorreta")
            user.password = undefined
            return res.status(200).json(user)
        } catch (error) {
            res.status(400).json(error.message)
        }
    }
}