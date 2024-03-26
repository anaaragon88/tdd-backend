import express from 'express';
import db from './database/connection';
import ThoughtModel from './models/ThoughtModel';
import RandomThoughtsRouter from './routes/randomThoughtsRoutes';

export const app = express();  
app.use(express.json());
app.use('', RandomThoughtsRouter);

try {
    db.authenticate();
    console.log('Connection has been established successfully.');
    ThoughtModel.sync();
} catch (error) {
    throw new Error('Unable to connect to the database:');
}

/*app.listen(8000, ()=>{
    console.log('Server UP running in http://localhost:8000/')
})*/