const { validationResult } = require("express-validator");

const { Resdential, Commercial, Property } = require('../models/properties');
const multer = require("multer");


// // add property for commercial,resdential properties
// const addProperty = async (req, res) => {
//     const errors = validationResult(req);
//     if (!errors.isEmpty()) {
//         return res.status(400).json(errors.array());
//     }
//     const newProperty = new Property(req.body);

//     try {
//         await newProperty.save();
//         res.status(201).json(newProperty);
//     } catch (err) {
//         res.status(404).json({ msg: err });
//            }

// }


const multerStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "images");
  },
  filename: (req, file, cb) => {
    const ext = file.mimetype.split("/")[1];
    cb(null, `property-${Date.now()}.${ext}`);
  },
});

const multerFilter = (req, file, cb) => {
  if (file.mimetype.startsWith("image")) {
    cb(null, true);
  } else {
    cb(new Error("Not an image! Please upload only images."), false);
  }
};

const imgUpload = multer({
  storage: multerStorage,
  fileFilter: multerFilter,
});

const uploadProImg = imgUpload.single("photo");

const addResdential = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json(errors.array());
  }
  const newResdential = new Resdential(req.body);
  const newProperty = new Property(req.body);

  try {
    await newProperty.save();
    await newResdential.save();
    res.status(201).json(newProperty);
  } catch (err) {
    res.status(404).json({ msg: err });
  }

}

const addCommercial = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json(errors.array());
  }
  const newCommercial = new Commercial(req.body);
  const newProperty = new Property(req.body);

  try {
    await newProperty.save();
    await newCommercial.save();
    res.status(201).json(newProperty);
  } catch (err) {
    res.status(404).json({ msg: err });
  }

}



const getallproperty = async (req, res) => {
  try {
    const properties = await Property.find();
    res.json(properties);
  } catch (err) {
    res.status(500).json({ msg: 'Server error' });
  }
}

const getResdential = async (req, res) => {
  try {
    const properties = await Resdential.find();
    res.json(properties);
  } catch (err) {
    res.status(500).json({ msg: 'Server error' });
  }
}
const getCommercial = async (req, res) => {
  try {
    const properties = await Commercial.find();
    res.json(properties);
  } catch (err) {

    res.status(500).json({ msg: 'Server error' });
  }


}


const getSingleProperty = async (req, res) => {
  try {
    const { searchParam } = req.params; // Access the parameter

    const query = {};
    if (searchParam) {
      // Check if it's a number (assuming price)
      if (!isNaN(searchParam)) {
        query.price = searchParam;
      } else {
        query.propertyaddress = searchParam;
      }
    } else {
      // Handle case where no search parameter is provided (optional)
      return res.status(400).json({ message: "Missing search parameter" });
    }

    const property = await Property.findOne(query);

    if (!property) {
      return res.status(404).json({ message: "Property not found" });
    }
    res.json(property);
  } catch (error) {
    return res.status(400).json({ message: "Error", error });
  }
};
// Express route handler
const getSingleCommercialByQuery = async (req, res) => {

  try {
    const { searchParam } = req.params;

    const query = {};
    if (searchParam) {
      if (!isNaN(searchParam)) {
        query.price = searchParam;
      } else {
        query.propertyaddress = searchParam;
      }
    } else {
      // Return a 400 Bad Request if search parameter is missing
      return res.status(400).json({ message: "Missing query parameter" });
    }

    const property = await Commercial.findOne(query);

    if (!property) {
      // Return a 404 Not Found if property is not found
      return res.status(404).json({ message: "Property not found" });
    }

    // Return the property if found
    res.json(property);
  } catch (error) {
    // Return a 400 Bad Request with error message
    return res.status(400).json({ message: "Error", error });
  }
};




const getSingleResdentialbyquery = async (req, res) => {
  try {
    const { searchParam } = req.params; // Access the parameter

    const query = {};
    if (searchParam) {
      // Check if it's a number (assuming price)
      if (!isNaN(searchParam)) {
        query.price = searchParam;
      } else {
        query.propertyaddress = searchParam;
      }
    } else {
      // Handle case where no search parameter is provided (optional)
      return res.status(400).json({ message: "Missing search parameter" });
    }

    const property = await Resdential.findOne(query);

    if (!property) {
      return res.status(404).json({ message: "Property not found" });
    }
    res.json(property);
  } catch (error) {
    return res.status(400).json({ message: "Error", error });
  }

};






const updateproperty = async (req, res) => {
  const propertyID = req.params.propertyId;
  try {

    const PropertyUpdated = await Property.updateOne({ _id: propertyID }, { $set: { ...req.body } });
    res.status(200).json(PropertyUpdated);
  } catch (err) {
    return res.status(400).json({ success: false, msg: err.msg })
  }

}

const deleteResdentiaal = async (req, res) => {
  const id = req.params.propertyId;
  try {
    const deletedProperty = await Resdential.findByIdAndDelete(id);
    if (!deletedProperty) {
      return res.status(404).json({ message: "Property not found!" });
    }
    res.json(deletedProperty);
  } catch (err) {
    res.status(500).json({ msg: "Server error" });
  }
}

const deleteCommercial = async (req, res) => {
  const id = req.params.propertyId;
  try {
    const deletedProperty = await Commercial.findByIdAndDelete(id);
    if (!deletedProperty) {
      return res.status(404).json({ message: "Property not found!" });
    }
    res.json(deletedProperty);
  } catch (err) {
    res.status(500).json({ msg: "Server error" });
  }
}






module.exports = {
  addCommercial,
  addResdential,
  getallproperty,
  getSingleProperty,
  getResdential,
  getCommercial,
  updateproperty,
  deleteResdentiaal, deleteCommercial,
  getSingleResdentialbyquery,
  getSingleCommercialByQuery,
  uploadProImg

}