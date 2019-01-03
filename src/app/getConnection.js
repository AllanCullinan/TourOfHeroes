var Connection = require('tedious').Connection;
var Request = require('tedious').Request;
var TYPES = require('tedious').TYPES;
var val = "Allan12";


var config = {
  database: "DEIMOS_LOGISTICS",
  server: "sit-messql1",
  options: { encrypt: false },
  userName: "DEIMOS_LOGISTICS",
  password: "DEIMOS_LOGISTICS"
};

//function getConnection(callback) {
  
//  try {
//    //throw new Error('connection failed');
//    var connection = new Connection(config);
//    callback(error, connection);
//  }
//  catch (error) {
//    callback(error, null);
//  }
//};

//getConnection(function (error, connection) {
//  if (error) {
//    console.log('Error:', error.message);
//  }
//  else {
//    console.log('Connection succeeded:', connection);
//  }
//});



function getConnection(callback) {
  //try {
    //throw new Error('connection passed');
    var connection = new Connection(config);
    //var connection = 'thisis connection';

    callback('thisis error', connection);
  //}
  //catch (error) {
  //  callback(error, null);
  //}
};

getConnection(function (err, conn)
{
  if (err != null)
  {
    console.log(err, conn);
    conn.on('connect', function (err) {
      if (err) {
        console.log(err);
      } else {
        console.log('create records');
        //createRecords(conn);
      }
    });
  }
});


function createRecords() {
  var sql = "insert into logttrl (trlregno, trlfrrdescr) values (@nVarCharVal1, @nVarCharVal2)";
  r = new Request(sql, function (err) {
    if (err) {
      console.log(err);
    } else {
      readRecords();
    }
  })

  r.addParameter('nVarCharVal1', TYPES.NVarChar, val);
  r.addParameter('nVarCharVal2', TYPES.NVarChar, "RT");

  r.on('requestCompleted', function (err) {
    if (err) {
      console.log(err);
    } else console.log("row added")
  });

  connection.execSql(r);
};



function readRecords() {
  request = new Request("Select trlregno, trlfrrdescr from logttrl where trlregno = @nVarCharVal1", function (err, rowCount) {
    if (err) {
      console.log(err);
    } else {
      console.log(rowCount + ' rows');
    }
  });

  request.addParameter('nVarCharVal1', TYPES.NVarChar, val);

  request.on('row', function (columns) {
    columns.forEach(function (column) {
      console.log(column.value);
    });
  });

  connection.execSql(request);
}


