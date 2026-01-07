export const isValidFlashcard = (flashcard) => {
    if (!flashcard || typeof flashcard !== "object") return false;

    // Check deck
    if (!flashcard.deck || typeof flashcard.deck.title !== "string" || !flashcard.deck.title.trim()) {
        return false;
    }

    // Check cards
    if (!Array.isArray(flashcard.cards) || flashcard.cards.length === 0) return false;

    // Optional: check that each card has question & answer
    for (const card of flashcard.cards) {
        if (
            !card ||
            typeof card.question !== "string" || !card.question.trim() ||
            typeof card.answer !== "string" || !card.answer.trim()
        ) {
            return false;
        }
    }

    return true;
};