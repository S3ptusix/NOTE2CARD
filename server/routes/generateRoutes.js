import express from 'express';
import { generateFlashcardController } from '../controllers/generateControllers.js';

const generateRouter = express.Router();

// GENERATE FLASHCARD
generateRouter.post('/flashcard', generateFlashcardController);

export default generateRouter;