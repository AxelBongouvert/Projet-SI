const sqlite3 = require('sqlite3').verbose();


// open the database
let  db = new sqlite3.Database('./BddDana.db', sqlite3.OPEN_READWRITE, (err) => {
  if (err) {
    console.error(err.message);
  }
  console.log('Connected to the database.');
});

db.serialize(() => {
  db.each(`SELECT  id,
                  description
           FROM Camion`, (err, row) => {
    if (err) {
      console.error(err.message);
    }
    console.log(row );
  });
});

db.close((err) => {
  if (err) {
    console.error(err.message);
  }
  console.log('Close the database connection.');
});


db.listen(7102, () => {
    console.log("Serveur à l'écoute");
});