const Sequelize=require('sequelize')
const db=new Sequelize(
    {
        dialect:'mysql',
        database:'grocery',
        username:'lucifer',
        password:'luciferPass1!1'
    }
)

const Item=db.define('item',{
    name:{
        type:Sequelize.STRING,
        allowNull:false
    },
    id:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        primaryKey:true
    }

}
)

module.exports={db,Item}