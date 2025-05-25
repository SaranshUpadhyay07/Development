var fs = require('fs');

fs.rename('ind.txt', 'myrenamedfile.txt', function (err){
    if(err) throw err;
    console.log("File Renamed");
});