const express = require("express");
const apiRoutes = express.Router();
const dbo = require("../db/mongoose_config");
const fetch = (...args) =>
    import('node-fetch').then(({default: fetch}) => fetch(...args));
const https = require('https');

apiRoutes.route("/api/data").get(async function (req, res) {
    try {
        const httpsAgent = new https.Agent({
            rejectUnauthorized: false,
        });
        // Fetch data from the external URL using node-fetch
        const response = await fetch('https://zm6zxgq6hyhe3smi5krzsrk2fu0iidhh.lambda-url.us-east-1.on.aws', {agent: httpsAgent});

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        // Send the data received from the external URL as the response to your React app
        res.json(data);
    } catch (error) {
        console.error('Error fetching data:', error.message);
        res.status(500).json({error: 'Internal Server Error'});
    }
});


// get a list of all the user ratings
apiRoutes.route("/api/user-rating").get(function (req, res) {
    dbo.userRatingSchema().find().then(result => {
        console.log('get a list of all the user ratings', result);
        res.json(result)
    });
});
// post user ratings
apiRoutes.route("/api/user-rating").post(function (req, res) {
    const buildModel = dbo.userRatingSchema()({
        name: req.body.name,
        number: req.body.number,
        email: req.body.email,
        favoriteBrand: req.body.favoriteBrand,
        rating: req.body.rating
    });
    console.log('buildModel', buildModel, req.body)

    buildModel.save().then(r => {
        console.log('create a new user rating', r)
        res.json(r);
    });
});

module.exports = apiRoutes;