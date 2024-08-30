const Favourite = require('../models/favourite.model');
// const {Models}=require('mongoose')

// let favourites = [];

const addFavourite = async (req, res) => {


    try {
        const newFavourite = new Favourite(req.body);
        await newFavourite.save();
        res.status(200).json(newFavourite);

    } catch (err) {
        return res.status(400).json({ error: err.message });
    }


    //    favorites.push(newFavourite);

};
const getSingleFavourite = async (req, res) => {
    try {
        const id = req.params.favouriteId;
        const singleFavourite = await Favourite.findById(id);
        if (!singleFavourite) {
            return res.status(404).json({ message: "The Property you are looking for is not found in your Favourites List " });
        }
        res.json(singleFavourite);
    } catch (error) {
        return res.status(404).json({
            message: error
        });
    }

};

const getallFavourites = async (req, res) => {
    try {
        let favourites = await Favourite.find();
        if (!favourites || favourites.length === 0) {
            return res.json({ Message: "Nothing found" });
        }
        res.json(favourites);
    } catch (err) {
         console.error(err);  
    return res.status(400).json({ error: err.message });
    }

}

const deleteFavourite = async (req, res) => {
    try {
      const favId = req.params.favouriteId;
  
      let single_favourite = await Favourite.findByIdAndDelete(favId)
      if (!single_favourite) {
        return res.status(404).json({ msg: "favourite not found" })
      }
      res.json({ Message: "favourite deleted successfully" });
    } catch (error) {
      return res.status(400).json(error);
    }
  };


module.exports = {
        addFavourite,
        getSingleFavourite,
        getallFavourites ,
        deleteFavourite
    }

