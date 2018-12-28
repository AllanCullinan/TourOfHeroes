const fs = require("fs");
var ws = fs.createWriteStream("out2.txt");
process.stdin.pipe(ws);
