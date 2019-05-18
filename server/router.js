const router = require('express').Router();
const controller = require('./controller.js');

router
  .route('/info')
  .get(controller.retrieveDoggo)
  .post(controller.addDoggo)
  .delete(controller.deleteDoggos)
  
router
  .route('/inquiry')
  .get(controller.getAllQuestions)
  .post(controller.askQuestion)

router
  .route('/inquiry/:name')
  .get(controller.getOneDoggo)

router
  .route('/inquiry/:email')
  .get(controller.getOneQuestion)

module.exports = router;