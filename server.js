var http = require('http');
var bl = require('bl');
var mysql = require('mysql');

http.createServer(function(req, res) {
  function send(statusCode, headers, body) {
    res.writeHead(statusCode, headers);
    res.end(body);
  }

  if (req.method.toUpperCase() === 'POST') {
    if (req.url !== '/api/query') { return send(500, {'Content-Type': 'text/plain'}, 'url not supported') }
    req.pipe(bl(function(err, data)  {
      var jsonDoc = JSON.parse(data.toString());
      var conn = mysql.createConnection(jsonDoc.url);
      conn.query(jsonDoc.query, function(e,rows) {
        if (e) { return send(500, {'Content-Type': 'plain/text'}, e.message); }
        send(200, {'Content-Type': 'application/json'}, JSON.stringify(rows));
        conn.end();
        conn = null;
      });
    }));
    return;
  }
  send(200, {'Content-Type': 'text/plain'}, 'sql2json micro service - see https://twilson63.github.io/sql2json');
}).listen(process.env.PORT || 3000);
