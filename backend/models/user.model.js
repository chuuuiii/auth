import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import validator from 'validator';

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Name is required'],
      trim: true,
      minlength: [2, 'Name must be at least 2 characters long'],
      maxlength: [50, 'Name must be at most 50 characters long'],
    },
    email: {
      type: String,
      required: [true, 'Email is required'],
      unique: true,
      lowercase: true,
      trim: true,
      validate: [validator.isEmail, 'Please provide a valid email'],
    },
    password: {
      type: String,
      required: [true, 'Password is required'],
      minlength: [8, 'Password must be at least 8 characters long'],
      select: false,
    },
    role: {
      type: String,
      enum: ['User', 'Admin'],
      default: 'User',
    },
  },
  { timestamps: true }
);


userSchema.statics.signup = async function (name, email, password, role) {

  if (!name || !email || !password || !role) {
    throw new Error('Please provide all the details');
  }

  if (!validator.isStrongPassword(password, { minLength: 8 })) {
    throw new Error('Password must be at least 8 characters long');
  }

  const existingUser = await this.findOne({ email });
  if (existingUser) {
    throw new Error('This email is already registered');
  }

  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salt);
  return this.create({ name, email, password: hash, role });
};

userSchema.statics.login = async function (email, password) {
  const user = await this.findOne({ email }).select('+password');
  if (!user || !(await bcrypt.compare(password, user.password))) {
    throw new Error('Invalid credentials');
  }
  return user;
};

const User = mongoose.model('User', userSchema);
export default User;