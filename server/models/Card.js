import { DataTypes } from 'sequelize';
import { sequelize } from '../config/sequelize.js';
import Decks from './Deck.js';

const Cards = sequelize.define('card', {
    deckId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Decks,
            key: 'id'
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
    },
    question: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    answer: {
        type: DataTypes.STRING(255),
        allowNull: false
    }
});

export default Cards;