const User = require('../models/user.model')


const getAllUsers = async (req, res) => {
  let users = await User.find()
  res.json(users);
}

const getSingleUser = async (req, res) => {
  try {
    const userId = req.params.userId;
    let singleUser = await User.findById(userId)
    if (!singleUser) {
      return res.status(404).json({ msg: "user not found" })
    }
    res.json(singleUser);
  } catch (error) {
    return res.status(400).json(error);
  }
}

const addNewUser = async (req, res) => {
  try {
    let user = new User(req.body);
    await user.save();
    res.json(user);
  } catch (error) {
    return res.status(400).json(error);
  }
}
const updateUser = async (req, res) => {
  try {
    const id = req.params.userId;

    let singleUser = await User.findByIdAndUpdate(id, req.body, { new: true })
    if (!singleUser) {
      return res.status(404).json({ msg: "user not found" })
    }
    res.json(singleUser);
  } catch (error) {
    return res.status(400).json(error);
  }

}
const deleteUser = async (req, res) => {
  try {
    const id = req.params.userId;

    await User.findByIdAndDelete(id) ;
    res.json({ Message: "User deleted successfully" });
  } catch (error) {
    return res.status(400).json(error);
  }
}

module.exports = {
  getAllUsers,
  getSingleUser,
  addNewUser,
  updateUser,
  deleteUser
}