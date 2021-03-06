const googleApi = require("../resources/google-api");
const _ = require("lodash");

var search = function(req, res) {
    if( _.get(req, 'query.q') ){
        googleApi.googleSearch(req.query.q, function (err, response){
            if(err){
                res.status(500).send();
            } else{
                res.status(200).send(JSON.stringify({link: response}));
            }
        });
    } else{
        res.status(500).send();
    }
};

module.exports = {
    search: search
}