const _ = require("lodash");
const superagent = require('superagent');
const API_KEY = 'AIzaSyCghxO6TG1mAi15Og1HJpP-GKIRXAhbYAk';
const GOOGLE_API_URL = 'https://www.googleapis.com/customsearch/v1';
const CUSTOM_SEARCH_ID = '000505807494019699278:_lekesxs8gw'

var search = function(q, callback) {
    if (q) {
        superagent.get(GOOGLE_API_URL)
        .query({ key: API_KEY, cx: CUSTOM_SEARCH_ID, q: q })
        .end((err, response) => {
        if (err) { 
            return console.log(err);
            callback(err, null);
        } else {
            var firstSearchResult = _.get(response, 'body.items[0].link')
            if( firstSearchResult ){
                callback(false, firstSearchResult);
            } else {
                callback('NO RESULT FOUND', '');
            }
        }
        });
    } else {
        callback(true, '');
    }
    
};

module.exports = {
    googleSearch: search
}