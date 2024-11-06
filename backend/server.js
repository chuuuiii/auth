import express from 'express';
import { connectDB } from './config/db.js';
import dotenv from 'dotenv';
import cors from 'cors';
import userRoutes from './routes/user.route.js';
// import path from 'path';

dotenv.config();
connectDB(); 

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.use('/api/user', userRoutes);

app.get('/', (req, res) => {
  res.send("Server is ready");
});

const PORT = process.env.PORT; 

// const __dirname = path.resolve(); 

// if (process.env.NODE === "production") {
//   app.use(express.static(path.join(__dirname, "/frontend/dist")));

//   app.get('*', (req, res) => {
//     res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"));
//   })
// }

app.listen(PORT, () => {
  console.log(`Server started at http://localhost:${PORT}`);
});
