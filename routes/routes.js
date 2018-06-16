var searchController = require('../controllers/search');
var path = require('path');

var appRouter = function(app) {
    app.get("/search", function(req, res) {
        searchController.search(req, res)
    });
};

module.exports = appRouter;