const Db = process.env.ATLAS_URI;
const mongoose = require("mongoose");

module.exports = {
    connectToServer: async () => require('mongoose').connect(Db),
    userRatingSchema: () => {
        const userRatingSchema = new mongoose.Schema({
            name: String,
            number: Number,
            email: String,
            favoriteBrand: String,
            rating: Number
        });

        return mongoose.models.UserRating || new mongoose.model('UserRating', userRatingSchema);
    }
};