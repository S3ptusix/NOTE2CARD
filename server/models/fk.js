import Cards from "./Card";
import Decks from "./Deck";

Cards.belongsTo(Decks, { foreignKey: 'deckId' });
Decks.hasMany(Cards, { foreignKey: 'deckId' });

export { Cards, Decks };