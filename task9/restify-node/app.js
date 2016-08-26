var restify = require('restify');
//var session = require('restify-session')({
//    debug: true,
//    ttl: 2
//});

var port = process.env.PORT || 3000;
var server = restify.createServer();
server.use(restify.acceptParser(server.acceptable));
server.use(restify.queryParser());
server.use(restify.bodyParser());
server.use(restify.CORS());
//server.use(session.sessionManager);

server.use(
    function (req, res, next) {
        'use strict';
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "X-Requested-With");
        return next();
    }
);
var $db = require('./modules/db');
console.log($db);
//
//function queryNews(req, res, next) {
//    var param = req.params;
//    connection.query('SELECT `id`, `catid`, `title`, `imgsrc`, `content`, `date`, `flag` FROM ' + table_news + ' WHERE catid = ' + param.arrNews[1] + ' LIMIT 0,' + param.arrNews[7],
//        function (err, results) {
//            if (err) {
//                throw err;
//            }
//            res.charSet('utf-8');
//            res.json(results);
//        }
//    );
//
//
//}
//function queryNewsId(req, res, next) {
//    var param = req.params;
//    console.log(param.arrNews[0]);
//    connection.query('SELECT * FROM ' + table_news + ' WHERE id=' + param.arrNews[0],
//        function (err, results) {
//            if (err) {
//                throw err;
//            }
//
//            res.charSet('utf-8');
//            res.json(results);
//        }
//    );
//
//
//}
//function queryAdminNews(req, res, next) {
//
//
//    var param = req.params;
//    connection.query('SELECT * FROM ' + table_news + ' WHERE catid',
//        function (err, results) {
//            if (err) {
//                throw err;
//            }
//            res.charSet('utf-8');
//            res.json(results);
//        }
//    );
//}
//function queryDelNews(req, res, next) {
//
//    var param = req.params;
//    connection.query('DELETE FROM ' + table_news + ' WHERE id = ' + param.arrNews[0],
//        function (err, results) {
//            if (err) {
//                throw err;
//            }
//            res.charSet('utf-8');
//            res.json(results);
//        }
//    );
//}
//function queryInsertNews(req, res, next) {
//
//    var param = req.params;
//    connection.query('INSERT INTO ' + table_news + '( `catid`, `title`, `imgsrc`, `content`, `date`, `flag`) VALUES (?,?,?,?,?,?)', [param.arrNews[1], param.arrNews[2], param.arrNews[3], param.arrNews[4], param.arrNews[5], param.arrNews[6]],
//        function (err, results) {
//            if (err) {
//                throw err;
//            }
//            res.json(results);
//        });
//}
//function queryUpdateNews(req, res, next) {
//    var param = req.params;
//    console.log(param);
//    connection.query('UPDATE ' + table_news + ' SET `catid`=?,`title`=?,`imgsrc`=?,`content`=?,`date`=?,`flag`=? WHERE id = ?', [param.arrNews[1], param.arrNews[2], param.arrNews[3], param.arrNews[4], param.arrNews[5], param.arrNews[6], param.arrNews[0]],
//        function (err, results) {
//            if (err) {
//                throw err;
//            }
//
//            res.charSet('utf-8');
//            res.json(results);
//        });
//}
//function queryLogin(req, res, next) {
//    var param = req.params;
//    connection.query('SELECT * FROM ' + table_user + ' WHERE username=?', [param.username], function (err, results) {
//        if (err) {
//            throw err;
//        }
//        res.charSet('utf-8');
//        var useInfo = res.json(results);
//
//    })
//}
server.get('/index', function (req, res, next) {
    $db.queryNews(req, res, next);
});
//server.get('/admin_list', function (req, res, next) {
//    $db.queryAdminNews(req, res, next);
//});
//server.get('/admin_list_del', function (req, res, next) {
//    $db.queryDelNews(req, res, next);
//});
//server.post('/admin_insert', function (req, res, next) {
//    $db.queryInsertNews(req, res, next);
//});
//server.get('/admin_list/id', function (req, res, next) {
//    $db.queryNewsId(req, res, next);
//});
//server.get('/admin_login', function (req, res, next) {
//    $db.queryLogin(req, res, next);
//});
//server.post('/admin_update', function (req, res, next) {
//    $db.queryUpdateNews(req, res, next);
//});
server.listen(port, function () {
    console.log('%s listening at %s', server.name, server.url);
});