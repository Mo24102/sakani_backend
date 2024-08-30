const express =require ('express');

const router =express.Router();

const offerController = require('../controller/offers.Controller') ; 

 router.route('/')
 .post(offerController.addOffer)


 
 .get( offerController.getAllOffer) ;
 
 router.route('/:offerId')
 .delete(offerController.deleteOffer)
 .get(offerController.getSingleOffer)
 .patch(offerController.updateOffer)
module.exports = router ;
