import express from 'express';
import { addCompanyController } from '../controllers/deckControllers.js';

const deckRouter = express.Router();

// ADD DECK
deckRouter.post('/add', addCompanyController);

export default deckRouter;