import {Sequelize} from "sequelize";

const db = new Sequelize('database_visionary', 'root', '', {
    host: "localhost",
    dialect: "mysql",
})

export default db;