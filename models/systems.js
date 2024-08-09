import {sequelize} from "../lib/db/init.js"
import { DataTypes } from "sequelize"

export const System = sequelize.define('System', {
    systemID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    systemName: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    // tableName: 'systems',
    timestamps: false
  })

