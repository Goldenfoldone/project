const {Client} = require('../models/models');

class ClientController {
    async create(req, res){
        const {FIO, Company, Group, img} = req.body
        const posts = await Client.create({FIO, Company, Group, img})
        return res.json(posts)
    }


    async getAll(req, res){
        let post_new
        post_new = await Client.findAll({order: [['id', 'ASC']]})
        return res.json(post_new)
    }
    async getOne(req, res){
        const {id} = req.params
        const post = await Client.findOne({where: {id}})
        return res.json(post)
    }

    async postisOne(req, res){
        const client = req.body
        const {id} = req.params
        const post = await Client.update({...client},{where: {id}})
        return res.json(post)
    }
}

module.exports = new ClientController()