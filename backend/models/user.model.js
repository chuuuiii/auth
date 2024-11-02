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
      maxlength: [50, 'Name must be at most 50 characters long'] 
    },
    email: {
      type: String,
      required: [true, 'Email is required'],
      unique: true,
      lowercase: true,
      trim: true,
      validate: {
        validator: function (v) {
          return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(v);
        },
        message: props => `${props.value} is not a valid email`
      }
    },
    password: {
      type: String,
      required: [true, 'Password is required'],
      minlength: [6, 'Password must be at least 6 characters long'],
      select: false // Do not return password by default in queries
    },
    role: {
      type: String,
      enum: ['user', 'admin'], // Correct usage for enum
      default: 'user'
    }
  },
  { timestamps: true }
);

userSchema.statics.signup = async function(name, email, password, role) {
  if (!name || !email || !password || !role) {
    throw new Error('Please provide all the details');
  }
  if (!validator.isEmail(email)) {
    throw new Error('Please provide a valid email');
  }
  if (!validator.isStrongPassword(password)) {
    throw new Error('Password must be at least 6 characters long');
  }
  const existingUser = await this.findOne({ email });
  if (existingUser) {
    throw new Error('This email is already registered');
  }
  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salt);
  const user = await this.create({ name, email, password: hash, role });
  return user;
};

const User = mongoose.model('User', userSchema);
export default User;
