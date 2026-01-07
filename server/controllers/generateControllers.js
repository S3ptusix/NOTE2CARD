import { generateFlashcardService } from "../services/generateServices.js";

// GENERATE FLASHCARD
export const generateFlashcardController = async (req, res) => {
    try {
        const { notes } = req.body;
        const result = await generateFlashcardService(notes);
        return res.json(result);
    } catch (error) {
        console.error("Error on generateFlashcardController:", error);
        return res.json({ success: false, message: "Server error" });
    }
};
