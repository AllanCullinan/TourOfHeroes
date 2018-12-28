const fs = require("fs");
var ws = fs.createWriteStream("outdevAllan.txt");
process.stdin.pipe(ws);
