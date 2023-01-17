const server = require('./src/app.js');
const { conn } = require('./src/db.js');

//Alter to save de data into the database
conn.sync({ force: true }).then(() => {
  server.listen(process.env.PORT, () => {
    console.log(`%s listening at ${process.env.PORT}`);
  });
});