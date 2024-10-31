import express from 'express';
import { connectDB } from './config/db.js';
import dotenv from 'dotenv';
import cors from 'cors'

dotenv.config();

const app = express();

//middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }))


//routes
app.get('/api/user')

app.get('/', (req, res) => {
  res.send("Server is ready")
})


const PORT = process.env.PORT
app.listen(PORT, () => {
  connectDB();
  console.log(`Server started at http://localhost:${PORT}`)
})
