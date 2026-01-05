import { DataTypes } from 'sequelize';
import { sequelize } from '../config/sequelize.js';

const Decks = sequelize.define('deck', {
    deckName: {
        type: DataTypes.STRING(255),
        allowNull: false
    }
});

export default Decks;