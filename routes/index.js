var express = require('express');
var router = express.Router();

var request = require('request-promise');

var IMGUR = 'https://api.imgur.com';
var IMGUR_GALLERY_PATH = IMGUR + '/3/gallery/search/';

var queryFromParams = function(query, sort, page) {
    return '?q=' + query + '&sort=' + sort + '&page=' + page;
}

/* GET home page, with IMGUR results if q is specified.
 * No req.params
 *
 * req.query string params
 * q: query (string)
 * sort: time | viral | top - defaults to time
 * page: page
 * */
router.get('/', function(req, res, next) {
    // using IMGUR search route
    // http://api.imgur.com/endpoints/gallery#gallery-search
    // Route	https://api.imgur.com/3/gallery/search/{sort}/{page}
    //
    if(req.query.q) {
        // defaults to viral
        var sort = req.query.sort || 'viral';
        var page = parseInt(req.query.page) || 0;
        var query = req.query.q;
        // has a query string
        request({
            'url': IMGUR_GALLERY_PATH + '/' + sort + '/' + page + '?q_type=anigif&q=' + query,
            'headers': {
                'Authorization': 'Client-ID ' + config.imgur.client_id
            }
        }).then(function(response) {
            var json = JSON.parse(response);
            console.log(json);
            res.render('index', {
                data: json.data,
                query: query,
                sort: sort,
                page: page,
                previous_query: queryFromParams(query, sort, page - 1),
                next_query: queryFromParams(query, sort, page + 1)
            });
        })
        .catch(function(error) {
            console.error("IMGUR Search Error: ", error)
            res.render('index', {
                error: error
            });
        });
    } else {
        res.render('index');
    }
});

module.exports = router;
