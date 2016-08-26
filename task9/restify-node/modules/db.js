var mysql = require('mysql');
//var $conf = require('./conf');
var connection = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: ''
});
var db_name = 'bd_news';
var table_news = 'news';
var table_user = 'user';
connection.connect();
connection.query('USE ' + db_name);
module.export = {
    queryNews: function (req, res, next) {
        var param = req.params;
        connection.query('SELECT `id`, `catid`, `title`, `imgsrc`, `content`, `date`, `flag` FROM ' + table_news + ' WHERE catid = ' + param.arrNews[1] + ' LIMIT 0,' + param.arrNews[7],
            function (err, results) {
                if (err) {
                    throw err;
                }
                res.charSet('utf-8');
                res.json(results);
            }
        );
    },
    queryNewsId: function (req, res, next) {
        var param = req.params;
        console.log(param.arrNews[0]);
        connection.query('SELECT * FROM ' + table_news + ' WHERE id=?',[param.arrNews[0]],
            function (err, results) {
                if (err) {
                    throw err;
                }

                res.charSet('utf-8');
                res.json(results);
            }
        );

    },
    queryAdminNews: function (req, res, next) {
        var param = req.params;
        connection.query('SELECT * FROM ' + table_news + ' WHERE catid',
            function (err, results) {
                if (err) {
                    throw err;
                }
                res.charSet('utf-8');
                res.json(results);
            }
        );
    },
    queryDelNews: function (req, res, next) {
        var param = req.params;
        connection.query('DELETE FROM ' + table_news + ' WHERE id = ?',[param.arrNews[0]],
            function (err, results) {
                if (err) {
                    throw err;
                }
                res.charSet('utf-8');
                res.json(results);
            }
        );
    },
    queryInsertNews: function (req, res, next) {
        var param = req.params;
        connection.query('INSERT INTO ' + table_news + '( `catid`, `title`, `imgsrc`, `content`, `date`, `flag`) VALUES (?,?,?,?,?,?)', [param.arrNews[1], param.arrNews[2], param.arrNews[3], param.arrNews[4], param.arrNews[5], param.arrNews[6]],
            function (err, results) {
                if (err) {
                    throw err;
                }
                res.json(results);
            });
    },
    queryUpdateNews: function (req, res, next) {
        var param = req.params;
        console.log(param);
        connection.query('UPDATE ' + table_news + ' SET `catid`=?,`title`=?,`imgsrc`=?,`content`=?,`date`=?,`flag`=? WHERE id = ?', [param.arrNews[1], param.arrNews[2], param.arrNews[3], param.arrNews[4], param.arrNews[5], param.arrNews[6], param.arrNews[0]],
            function (err, results) {
                if (err) {
                    throw err;
                }

                res.charSet('utf-8');
                res.json(results);
            });
    },
    queryLogin: function (req, res, next) {
        var param = req.params;
        connection.query('SELECT * FROM ' + table_user + ' WHERE username=?', [param.username], function (err, results) {
            if (err) {
                throw err;
            }
            res.charSet('utf-8');
            var useInfo = res.json(results);

        })
    }
};