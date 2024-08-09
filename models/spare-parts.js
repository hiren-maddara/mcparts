import {sequelize} from "../lib/db/init.js"
import { DataTypes } from "sequelize";
import { System } from "./systems.js";

export const SpareParts = sequelize.define(
  "SpareParts",
  {
    spareID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    spareName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    partNum: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    manufacturer: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    systemID: {
      type: DataTypes.INTEGER,
      references: {
        model: System,
        key: "systemID",
      },
    },
    stockID: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: "spareParts",
    timestamps: false,
  }
);

// Establish the relationship
System.hasMany(SpareParts, {
  foreignKey: "systemID",
  sourceKey: "systemID",
});
SpareParts.belongsTo(System, {
  foreignKey: "systemID",
  targetKey: "systemID",
});


try {

  // Sync models with the database
await sequelize.sync().then(() => {
  console.log('Tables have been created');
}).catch(error => {
  console.error('Error creating tables:', error);
});


// Insert data into systems table
const systems = await System.bulkCreate([
  { systemName: 'System A' },
  { systemName: 'System B' },
  { systemName: 'System C' }
]);

// Insert data into spareParts table
SpareParts.bulkCreate([
  { spareName: 'Spare Part 1', partNum: 'P001', manufacturer: 'Manufacturer A', price: 100.0, systemID: "1", stockID: 'ST001' },
  { spareName: 'Spare Part 2', partNum: 'P002', manufacturer: 'Manufacturer B', price: 150.0, systemID: "1", stockID: 'ST002' },
  { spareName: 'Spare Part 3', partNum: 'P003', manufacturer: 'Manufacturer A', price: 200.0, systemID: "1", stockID: 'ST003' },
  { spareName: 'Spare Part 4', partNum: 'P004', manufacturer: 'Manufacturer C', price: 250.0, systemID: "1", stockID: 'ST004' },
  { spareName: 'Spare Part 5', partNum: 'P005', manufacturer: 'Manufacturer B', price: 300.0, systemID: "1", stockID: 'ST005' }
]);


const sp = await SpareParts.findAll()
console.log("find-all", sp)
 
} catch (error) {
  console.log(error)
}