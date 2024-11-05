import User from '../models/user.model.js';
import jwt from 'jsonwebtoken';

//Generate JWT token
const generateToken = (_id) => {
  return jwt.sign({ _id }, process.env.SECRET, { expiresIn: '1d' });
};

// Get all users
const getUsers = async (req, res) => {
  try {
    const users = await User.find({});
    res.status(200).json({ success: true, data: users });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Server Error' });
  }
  // res.json({ message: 'All users' });
};

// Login user
const loginUser = async (req, res) => {

  const { email, password } = req.body;

  // if (!email || !password) {
  //  return res.status(400).json({ success: false, message: "Both email and password are required" })
  // }
 
  try {
    const user = await User.login(email, password);
    const token = generateToken(user._id);
    res.status(200).json({ success: true, data: { email: user.email, role: user.role, token} });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }

  // res.json({ message: 'Login user' });
};

// Signup user
const signupUser = async (req, res) => {
  const { name, email, password, role } = req.body;
  try {
    const user = await User.signup(name, email, password, role);
    //Generate a token
    const token = generateToken(user._id);
    res.status(201).json({ success: true, data: { email: user.email, token }});
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

export { getUsers, loginUser, signupUser };
