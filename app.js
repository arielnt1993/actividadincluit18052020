const fs = require('fs');
const logger = require('./logger')
function showFiles(path){
    fs.readdir(`${path}`,(e,files) => {
        (e) ? console.log(e) : console.log(files);
    });
    return path;
}



let objShow = showFiles('D:/android studio');
logger.log(`files at ${objShow}: `,objShow);

