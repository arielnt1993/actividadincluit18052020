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
//when trying to add the methods to a variable I always get an undefined console.log()
let directory='D:/';
let rootDirSync = fs.readdirSync(directory);


fs.readdir(directory,(e,files)=>{
    (e) ? console.log(e) : console.log(`files in directory asyncrhonous ${directory}: `,files);
})


fs.readdir(directory,(e,files)=>{
    (e) ? console.log(e) : console.log(`files in directory asyncrhonous in reverse order ${directory}: `,files.reverse());
})
fs.readdir(directory,(e,files)=>{
    let len;
    
    (e) ? console.log(e) : (len = files.filter(str=>str[0].includes('p')).length
                            ,console.log(`there are ${len} files in directory asyncrhonous filtering by the first char "p" in "${directory}": `,files.filter(str=>str[0].includes('p'))));
})


logger.log(`files in directory syncrhonous ${directory}: `,rootDirSync);

