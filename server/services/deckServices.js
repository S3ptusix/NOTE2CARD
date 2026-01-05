import Cards from "../models/Card.js";
import Decks from "../models/Deck.js";

export const addDeckService = async (deckName) => {
    try {
        if (!deckName) {
            return { success: false, message: "Please enter a deck name." };
        }

        const deck = await Decks.create({ deckName });

        return { success: true, message: "Deck created successfully" };

    } catch (error) {
        console.log('Error on addDeckService:', error);
        return { success: false, message: 'Error on addDeckService' };
    }
};
