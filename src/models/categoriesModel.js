import mongoose from 'mongoose';

const categorySchema = new mongoose.Schema(
    {
        nome: { type: String, minLenght: 3, required: true },
        status: { type: String, enum: ['ATIVA', 'INATIVA'], default: 'ATIVA' },
    },
);

const categories = mongoose.model('categories', categorySchema);

export default categories;