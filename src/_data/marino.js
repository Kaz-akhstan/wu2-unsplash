const EleventyFetch = require("@11ty/eleventy-fetch");
require('dotenv').config();

module.exports = async function() {
    let url = `https://restcountries.com/v3.1/name/marino`;

    return EleventyFetch(url, {
        duration: "1d",
        type: "json"    // we’ll parse JSON for you
    });
};