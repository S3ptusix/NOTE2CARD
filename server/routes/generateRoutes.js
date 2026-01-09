import express from 'express';
import { generateFlashcardController } from '../controllers/generateControllers.js';
import { authenticateUserJWT } from '../middleware/auth.js';

const generateRouter = express.Router();

// GENERATE FLASHCARD
generateRouter.post('/flashcard', authenticateUserJWT, generateFlashcardController);

export default generateRouter;