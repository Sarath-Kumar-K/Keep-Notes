import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import path from 'path';
import noteRoutes from './routes/note.route.js';

dotenv.config();
const __dirname = path.resolve();

const app = express();

app.listen(3000, () => {
    console.log("server is listening to the port 3000");
});

mongoose.connect(process.env.MONGO).then(()=>{
    console.log("Database Connected Successfully !");
}).catch((err)=>{
    console.log(err);
});

app.use(express.json());

app.use('/api/note',noteRoutes);