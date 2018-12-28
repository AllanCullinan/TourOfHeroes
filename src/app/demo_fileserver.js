  var express = require('express');
  var app = express();

  app.get('/', function (req, res) {

    var sql = require('mssql//msnodesqlv8');
    var config = {
      driver: 'msnodesqlv8',
      connectionString: 'Driver={SQL Server Native Client 11.0};Server=sit-messql1;Database=DEIMOS_LOGISTICS;Trusted_Connection=yes;',
    };
    const pool = new sql.ConnectionPool(config).connect().then(pool => {
      return pool.request().query("Select * From dbo.LOGTTRL Where TRLREGNO = 'KL1234'")
    }).then(result => {
      let rows = result.recordset
      res.status(200).json(rows);
      sql.close();
    }).catch(err => {
      res.status(500).send({ message: `${err}` })
      sql.close();
    });

  });

  var server = app.listen(5000, function () {
    console.log('Server is running..');
});

