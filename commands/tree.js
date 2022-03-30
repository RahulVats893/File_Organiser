module.exports = {
    treeKey: treefn
}
let fs = require('fs');
let path = require('path');

function treefn(dirpath) {
    // let destpath;
    // console.log("organize command run successfully");
    if (dirpath === undefined) {
        treeHelper(process.cwd(), " ");
        return;
    } else {
        let doesexist = fs.existsSync(dirpath);
        if (doesexist) {
            treeHelper(dirpath, " ");
        } else {
            console.log("kindly enetre correct path");
            return;
        }
    }
}

function treeHelper(dirpath, indent) {
    // is file or folder
    let isFile = fs.lstatSync(dirpath).isFile();
    if (isFile) {
        let fileName = path.basename(dirpath);
        console.log(indent + " --> " + fileName);
    } else {
        let dirName = path.basename(dirpath);
        console.log(indent + " |--- " + dirName);
        let childrens = fs.readdirSync(dirpath);
        for (let i = 0; i < childrens.length; i++) {
            let childPath = path.join(dirpath, childrens[i]);
            treeHelper(childPath, indent + "\t");
        }
    }
}