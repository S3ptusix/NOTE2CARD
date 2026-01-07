import { Decks, Cards } from "../models/fk.js";
import { generateFlashcard } from "../gemini/gemini.js";
import { isValidFlashcard } from "../utils/validate.js";

// GENERATE FLASHCARD
export const generateFlashcardService = async (notes) => {
    try {
        if (!notes?.trim()) {
            return { success: false, message: "Please enter a note." };
        }

        const flashcards = await generateFlashcard(notes);

        // Validate deck & cards
        if (!isValidFlashcard(flashcards)) {
            return { success: false, message: "Generated flashcards are invalid." };
        }

        // Create deck in DB
        const deck = await Decks.create({ deckName: flashcards.deck.title });

        // Prepare cards with deckId
        const cardsToCreate = flashcards.cards.map(card => ({
            deckId: deck.id,
            question: card.question,
            answer: card.answer
        }));

        // Save all cards
        await Cards.bulkCreate(cardsToCreate);

        return {
            success: true,
            message: "Flashcards generated successfully."
        };

    } catch (error) {
        console.log("Error on generateFlashcardService:", error);

        return {
            success: false,
            message: "Error while generating flashcards."
        };
    }
};
