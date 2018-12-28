const fs = require("fs");
var ws = fs.createWriteStream("out1.txt");
process.stdin.pipe(ws);
