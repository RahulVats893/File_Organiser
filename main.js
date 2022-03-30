#!/usr/bin/env node

let inputArr = process.argv.slice(2);
let path = require('path');
let fs = require('fs');
const { dir } = require('console');
console.log(inputArr);
let command = inputArr[0];

let helpObj = require("./commands/help");
let organizeObj = require("./commands/organize");
let treeObj = require("./commands/tree");

let types = {
    media: ["mp4", "mkv", "jpg"],
    archives: ['zip', '7z', 'rar', 'tar', 'gz', 'ar', 'iso', "xz"],
    documents: ['docx', 'doc', 'pdf', 'xlsx', 'xls', 'odt', 'ods', 'odp', 'odg', 'odf', 'txt', 'ps', 'tex', 'js'],
    app: ['exe', 'dmg', 'pkg', "deb"]
}
switch (command) {
    case "tree":
        // treefn(inputArr[1]);
        treeObj.treeKey(inputArr[1]);
        break;
    case "organize":
        // organizefn(inputArr[1]);
        organizeObj.organizeKey(inputArr[1]);
        break;
    case "help":
        // helpfn();
        helpObj.helpKey();
        break;
    default:
        console.log("Please enter correct input");
        break;
}

// function treefn(dirpath) {
//     // let destpath;
//     // console.log("organize command run successfully");
//     if (dirpath === undefined) {
//         treeHelper(process.cwd(), " ");
//         return;
//     } else {
//         let doesexist = fs.existsSync(dirpath);
//         if (doesexist) {
//             treeHelper(dirpath, " ");
//         } else {
//             console.log("kindly enetre correct path");
//             return;
//         }
//     }
// }

// function treeHelper(dirpath, indent) {
//     // is file or folder
//     let isFile = fs.lstatSync(dirpath).isFile();
//     if (isFile) {
//         let fileName = path.basename(dirpath);
//         console.log(indent + " --> " + fileName);
//     } else {
//         let dirName = path.basename(dirpath);
//         console.log(indent + " |--- " + dirName);
//         let childrens = fs.readdirSync(dirpath);
//         for (let i = 0; i < childrens.length; i++) {
//             let childPath = path.join(dirpath, childrens[i]);
//             treeHelper(childPath, indent + "\t");
//         }
//     }
// }


// function organizefn(dirpath) {
//     let destpath;
//     // console.log("organize command run successfully");
//     if (dirpath === undefined) {
//         // console.log("please enter correct path");
//         destpath = process.cwd();
//         return;
//     } else {
//         let doesexist = fs.existsSync(dirpath);
//         if (doesexist) {
//             destpath = path.join(dirpath, "organised_file");
//             if (fs.existsSync(destpath) == false) {
//                 fs.mkdirSync(destpath);
//             }

//         } else {
//             console.log("kindly enetre correct path");
//             return;
//         }
//     }
//     organiseHelper(dirpath, destpath);
// }

// function organiseHelper(src, dest) {
//     let childNames = fs.readdirSync(src);
//     // console.log(childNames);
//     for (let i = 0; i < childNames.length; i++) {
//         let childAddress = path.join(src, childNames[i]);
//         // console.log(childAddress);
//         let isfile = fs.lstatSync(childAddress).isFile();
//         if (isfile) {
//             let category = getCategory(childNames[i]);
//             console.log(childNames[i] + "  belongs to -->  " + category);
//             sendFiles(childAddress, dest, category);
//         }
//     }


// }

// function getCategory(name) {
//     let ext = path.extname(name);
//     ext = ext.slice(1);
//     for (let type in types) {
//         let ctypearray = types[type]
//         for (let i = 0; i < ctypearray.length; i++) {
//             if (ext == ctypearray[i]) {
//                 return type;
//             }
//         }
//     }
//     return "others";

// }

// function sendFiles(srcFilePath, dest, category) {
//     let categoryPath = path.join(dest, category);
//     if (fs.existsSync(categoryPath) == false) {
//         fs.mkdirSync(categoryPath);
//     }
//     let fileName = path.basename(srcFilePath);
//     let destFilePath = path.join(categoryPath, fileName);
//     fs.copyFileSync(srcFilePath, destFilePath);
//     console.log(fileName + " copied to --> " + category);

// }

// function helpfn() {
//     console.log(`
//                     List of All Commands:
//                         1. node main.js help
//                         2. node main.js tree "dirpath"
//                         3. node main.js organize "dirpath"
//     `);
// }