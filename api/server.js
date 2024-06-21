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

app.use(express.static(path.join(__dirname,'/client/dist')));

app.get('*', (req,res) => {
    res.sendFile(path.join(__dirname, 'client','dist', 'index.html'));
});

app.use((err,req,res,next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || "Internal Server Error";
    res.status(statusCode).json({
        success:false,
        statusCode,
        message,
    });
});