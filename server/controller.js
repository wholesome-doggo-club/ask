const db = require('../database/models.js');
const connection = require('../database/index.js');

module.exports = {

  retrieveDoggo(req, res) {
    db.Doggo.find({})
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((error) => {
      res.status(404).send(`error retrieving doggo profile from database Doggo: ${error}`);
    })
  },
  addDoggo(req, res) {
    const { name, sex, location, breed, size, coatLength, vaccinations, goodInHomeWith, health, adoptionFee, ageInWeeks, description, shelter } = req.body;
    db.Doggo.create({name, sex, location, breed, size, coatLength, vaccinations, goodInHomeWith, health, adoptionFee, ageInWeeks, description, shelter})
    .then(() => {
      res.status(201).send(`success adding doggo(s)`);
    })
    .catch((error) => {
      res.status(404).send(`error adding doggo(s): ${error}`);
    })
  },
  askQuestion(req, res) {
    const { firstName, lastName, email, country, zipcode, phoneNumber, communication, message } = req.body;
    db.Customer.create({firstName, lastName, email, country, zipcode, phoneNumber, communication, message})
    .then(() => {
      res.status(201).send(`success asking question for customer ${name}!`);
    })
    .catch((error) => {
      res.statsu(404).send(`error posting a question from ${name} to the database: ${error}`);
    })
  },
  getAllQuestions(req, res) {
    db.Customer.find({})
    .then((data) => {
      res.status(200).send(`success getting all questions: ${data}`);
    })
    .catch((error) => {
      res.status(404).send(`error getting all questions: ${error}`);
    })
  },
  getOneDoggo(req, res) {
    const { name } = req.body;
    db.Doggo.find({name})
    .then((data) => {
      res.status(200).send(`success retrieving doggo ${name}: ${data}`);
    })
    .catch((error) => {
      res.status(404).send(`error retrieving doggo ${name}: ${error}`);
    })
  },
  getOneQuestion(req, res) {
    const { name, message } = req.body;
    db.Customer.find({name, message})
    .then((data) => {
      res.status(200).send(`success retrieving question from customer ${name}: ${data}`);
    })
    .catch((error) => {
      res.status(404).send(`error retrieving question from customer ${name}: ${error}`);
    })
  },
  deleteDoggos(req, res) {
    db.Doggo.deleteMany({})
    .then(() => {
      res.status(200).send('all doggos deleted')
    })
    .catch((error) => {
      res.status(404).send(`error deleting all doggos: ${error}`);
    })
  }
  //end of module.exports
}