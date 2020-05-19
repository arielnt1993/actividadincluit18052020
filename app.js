const fs = require('fs');
const readline = require('readline');
const logger = require('./logger');


/* me tira error => please write a valid directory (for example: "C:/"): internal/fs/utils.js:569
    throw new ERR_INVALID_ARG_TYPE(propName, ['string', 'Buffer', 'URL'], path);
    ^
const rl = readline.createInterface({
    input: process.stdin,
    output:process.stdout
});

let directory = rl.question('please write a valid directory (for example: "C:/"): ',(value) => {
    let dir = value;
    console.log(`you wrote ${dir}`);
    rl.close();
});*/
let directory='C:/'
let rootDirSync = fs.readdirSync(directory);


fs.readdir(directory,(e,files)=>{
    (e) ? console.log(e) : console.log(`files in directory asyncrhonous ${directory}: `,files);
})


fs.readdir(directory,(e,files)=>{
    (e) ? console.log(e) : console.log(`files in directory asyncrhonous in reverse order ${directory}: `,files.reverse());
})
fs.readdir(directory,(e,files)=>{
    (e) ? console.log(e) : console.log(`files in directory asyncrhonous filtering by the first char ${directory}: `,files.filter(str=>str.includes('P')));
})


logger.log(`files in directory syncrhonous ${directory}: `,rootDirSync);

