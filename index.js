require('dotenv').config() ;
const uploud = require('./routes/uploud')
const Grid = require('gridfs-stream') ;
const mongose = require('mongoose') ;
const express = require('express');
const app = express();


app.use(express.json());
const propertyRouter = require('./routes/property.Routes') 
const offerRouter = require('./routes/offer.Routes') 
const mongoose = require('./database/db');
//const { validationResult } = require('express-validator');
//const PropertyController = require('./controller/property.controller') ;
const userRouter = require('./routes/user.routes');
const tourRequestRouter = require('./routes/tourRequest.Routes');
const favouritRouter = require('./routes/favourite.routes')




// let gfs ;
// const conn = mongose.Connection ;
// conn.once("open" , fucation()=  {
//         gfs: Grid(conn.db, mongose.mongo) ,
//         gfs.collection("photos")
// })




app.use('/api/Users', userRouter);
app.use('/api/properties', propertyRouter) ;    
app.use('/api/offers', offerRouter);
app.use('/api/favourites', favouritRouter) ;
app.use('/api/tours', tourRequestRouter);
// app.use("/file", uploud) ;




app.listen(4000,() => {
    console.log('listening on port 4000');
})

