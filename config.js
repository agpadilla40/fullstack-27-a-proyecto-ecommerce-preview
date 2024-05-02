import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const connect = () => {
    mongoose.connect(process.env.DB_URL);

    const connection = mongoose.connection;

    connection.once('open', () => {
        console.log('Database connected successfully');
    });

    connection.once('error', () => {
        console.log('Error connecting to database');
    });
};

export { connect };

