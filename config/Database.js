import {Sequelize} from "sequelize";

const db = new Sequelize('database_sister', 'root', '', {
    host: "localhost",
    dialect: "mysql",
})

export default db;