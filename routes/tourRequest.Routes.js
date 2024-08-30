
const express = require('express');  

const {body} = require('express-validator')

const router = express.Router();

const tourController = require('../controller/tourRequest.Controller.js');


router.route('/')

.post(tourController.addTour)
.get(tourController.getAllTours)

router.route('/:reqId')
.get(tourController.getSingleTour) 
.patch(tourController.updateTour) 
.delete(tourController.deleteTour)

module.exports= router;