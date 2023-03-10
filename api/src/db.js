require("dotenv").config();
const { Sequelize } = require("sequelize");
const fs = require("fs");
const path = require("path");
const {PGDIALECT, PGUSER, PGPASSWORD, PGPORT, PGHOST, PGDATABASE } = process.env;


const sequelize = new Sequelize(`${PGDIALECT}://${PGUSER}:${PGPASSWORD}@${PGHOST}:${PGPORT}/${PGDATABASE}`,
{
  logging: false, // set to console.log to see the raw SQL queries
  native: false, // lets Sequelize know we can use pg-native for ~30% more speed
});
const basename = path.basename(__filename);

const modelDefiners = [];

fs.readdirSync(path.join(__dirname, "/models"))
	.filter(
		(file) =>
			file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
	)
	.forEach((file) => {
		modelDefiners.push(require(path.join(__dirname, "/models", file)));
	});

// Injectamos la conexion (sequelize) a todos los modelos
modelDefiners.forEach((model) => model(sequelize));
// Capitalizamos los nombres de los modelos ie: product => Product
let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [
	entry[0][0].toUpperCase() + entry[0].slice(1),
	entry[1],
]);
sequelize.models = Object.fromEntries(capsEntries);

const { Users, Schedules, Subjects, Prices, Days } = sequelize.models;

Users.belongsTo(Schedules);
Schedules.hasMany(Users);

Users.belongsTo(Subjects);
Subjects.hasMany(Users);

Users.belongsTo(Prices);
Prices.hasMany(Users);

Users.belongsTo(Days);
Days.hasMany(Users);


module.exports = {
	...sequelize.models, 
	conn: sequelize
};