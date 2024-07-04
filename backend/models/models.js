const sequelize = require('../db')
const {DataTypes} = require('sequelize')

const Client = sequelize.define('Client',{
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    FIO: {type: DataTypes.STRING},
    Company: {type: DataTypes.STRING},
    Group: {type: DataTypes.STRING},
    img: {type: DataTypes.BOOLEAN}
})


module.exports ={
    Client
}