import mongoose from 'mongoose';

const domain = process.env.MONGO_DOMAIN || 'localhost'
mongoose.connect(`mongodb://admin:secret@${domain}:27017/ecomm?authSource=admin`);

const db = mongoose.connection;

export default db;