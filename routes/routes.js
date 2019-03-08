var searchController = require('../controllers/search');

var appRouter = function(app) {

    app.use((req, res, next) => {
        res.append('Access-Control-Allow-Origin', ['*']);
        res.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
        res.append('Access-Control-Allow-Headers', 'Content-Type');
        next();
    });
    
    app.get("/search", function(req, res) {
        searchController.search(req, res)
    });
};

module.exports = appRouter;
