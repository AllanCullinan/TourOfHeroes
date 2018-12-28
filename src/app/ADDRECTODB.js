var Connection = require('tedious').Connection;
var config = {
  database: "DEIMOS_LOGISTICS",
  server: "sit-messql1",
  options: { encrypt: false },
  userName: "DEIMOS_LOGISTICS",
  password: "DEIMOS_LOGISTICS"
};

var connection = new Connection(config);
connection.on('connect', function (err) {
  if (err) {
    console.log(err);
  } else {
    executeStatement();
  }
});


var Request = require('tedious').Request;

function executeStatement() {
  request = new Request("Select trlregno, trlfrrdescr from logttrl", function (err, rowCount) {
    if (err) {
      console.log(err);
    } else {
      console.log(rowCount + ' rows');
    }
  });

  request.on('row', function (columns) {
    columns.forEach(function (column) {
      console.log(column.value);
    });
  });

  connection.execSql(request);

}
