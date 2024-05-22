import mongoose from 'mongoose';
import { uri } from "./db.ts"

mongoose.connect(`${uri}ma_base_de_donnees`);

const bookSchema = new mongoose.Schema({
    author: {type: String, required: true},
    title: {type: String, required: true},
  });
export const Books = mongoose.model('Book', bookSchema);