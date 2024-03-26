import { DataTypes, Model,  } from "sequelize";
import db from "../database/connection";

const ThoughtModel = db.define('thoughts', {
    name: DataTypes.STRING,
    description: DataTypes.STRING
});

(async () => {
    await db.sync();
 console.log("All models were synchronized successfully.");
 })();

export default ThoughtModel;