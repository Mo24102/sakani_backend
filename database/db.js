const mongoose = require('mongoose');

const serveratlas = "mongodb+srv://sakaniproject39:broker-1234@cluster0.jxm5yoj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const local = "mongodb://localhost:27017" ;
mongoose.connect(local, {
  serverSelectionTimeoutMS: 5000,
  connectTimeoutMS: 40000,
  socketTimeoutMS: 45000,
  retryWrites: true,
})
.then(() => {
  console.log("Connected successfully");
})
.catch((error) => {
  console.error("Connection error:", error);
});

module.exports = mongoose;