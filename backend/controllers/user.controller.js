// import User from "../models/user.model";


//all user
const getUsers = (req, res) => {
  res.json({ message: 'All user' })
}

//login
const loginUser = (req, res) => {
  res.json({ message: 'Login user'})
}

const signupUser = (req, res) => {
  res.json({ message: 'Signup user'})
}

export { getUsers, loginUser, signupUser };