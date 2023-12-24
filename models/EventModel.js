import {Sequelize} from "sequelize";
import db from "../config/Database.js";

const {DataTypes} = Sequelize;

const Event = db.define('event', {
    tiket_id:{
        type: DataTypes.STRING
    },
    date:{
        type: DataTypes.DATE
    },
    agency:{
        type: DataTypes.STRING
    },    
    event_name:{
        type: DataTypes.STRING
    },    
    place:{
        type: DataTypes.STRING
    },    
    city:{
        type: DataTypes.STRING
    }
}, {
    freezeTableName: true
})

export default Event;