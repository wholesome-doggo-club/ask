const db = require('./models.js');
const doggoSeeder = require('../data/doggoData.json');
// const customerSeeder = require('../data/customerData.json');


const seedDoggos = () => {
  db.Doggo.create(doggoSeeder)
  .then(() => console.log("100 doggos successfully seeded into doggoInfo"))
  .catch((err) => console.log('error: ', err))
}

// const seedCustomers = () => {
//   db.Customer.create()
// }


seedDoggos();
// seedCustomers();