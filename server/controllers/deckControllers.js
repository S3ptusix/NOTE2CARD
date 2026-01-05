import { addDeckService } from "../services/deckServices.js";

// ADD COMPANY
export const addCompanyController = async (req, res) => {
    const { deckName } = req.body;
    try {
        const result = await addDeckService(deckName);
        return res.json(result);
    } catch (error) {
        console.error("Error on addCompanyController:", error);
        return res.json({ success: false, message: "Server error" });
    }
};
