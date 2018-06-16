var searchController = require('../controllers/search');
var path = require('path');

var appRouter = function(app) {
    app.get("/search", function(req, res) {
        searchController.search(req, res)
    });
    app.get("/hubtype-form", function(req, res) {
        res.sendFile(path.join(__dirname, '../', 'hubtype-search.html'));
    });
    app.get("/hubtype-search.css", function(req, res) {
        res.sendFile(path.join(__dirname, '../', 'hubtype-search.css'));
    });
};

module.exports = appRouter;