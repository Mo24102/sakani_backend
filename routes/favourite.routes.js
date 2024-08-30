const express = require('express');
const router = express.Router();
const FavouriteController = require('../controller/favourite.controller');
// const favouriteModel = require('../models/favourite.model');

router.route('/').post(FavouriteController.addFavourite)
.get(FavouriteController.getallFavourites);

router.route('/:favouriteId') 
.get( FavouriteController.getSingleFavourite )
.delete(FavouriteController.deleteFavourite);

module.exports = router;

