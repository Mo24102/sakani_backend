const { model } = require('mongoose');
const offer =require ('../models/offers') ;

const addOffer = async (req, res) => {
    try {
        let Offer = new offer(req.body);
        await Offer.save()
        res.json(Offer);
    }
    catch (error) {
        res.status(500).json({ msg: 'Server error' });
    }
    // courses.push(offer);

}
const updateOffer = async (req, res) => {
    const offerId = req.params.offerId;
    try {
        let offer = await Offer.findById(offerId);

        if (!offer) {
            return res.status(404).json({ message: 'Offer not found' });
        }
      offer = Object.assign(offer , req.body);
        await offer.save();

        res.json(offer);
    } catch (error) {
        res.status(500).json({ msg: 'Server error' });
    }
}
const getAllOffer = async(req,res)=>{

    const Offer =await offer.find();
    
    res.json(Offer)
}
const deleteOffer = async (req, res) => {
    const id = req.params.offerId;
    try{
        const Offer = await offer.findByIdAndDelete(id);
        if (!Offer) {
            return res.status(404).json({ message: 'Offer not found' });
        }

        res.status(200).json({ message: `Offer with ID ${id} deleted successfully.` });
    } catch (error) {
        res.status(500).json({ msg: 'Server error' });
    }
}
const getSingleOffer = async (req, res) => {
    try {
        const id = req.params.offerId;
        const property = await offer.findById(id);
        if (!property) {
            return res.status(404).json({ message: "property not found" });
        }
        res.json(property);
    } catch (error) {
        return res.status(400).json({ message: "Error" });

    }

}
module.exports ={
    getAllOffer,
    deleteOffer,
    getSingleOffer ,
    addOffer ,
    updateOffer

}
