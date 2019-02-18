let folder = './server/models';

let fs = require('fs');

function readFolder(dirname) {
    fs.readdir(dirname, function (err, filenames) {
        if (err) {
            console.log(err);
        }
        filenames.forEach(function (filename) {
            if (filename != 'index.js') {
                let name = [];
                let nameFile = "";

                name = filename.split("_");
                name.forEach(function (n, i) {
                    name[i] = upperCaseFirstChar(n);
                    nameFile += name[i];
                })
                fs.rename(dirname + '/' + filename, dirname + '/' + nameFile, function (err) {
                    if (err) console.log(err);

                })
            }
        })
    })
}

function upperCaseFirstChar(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

readFolder(folder);

module.exports = readFolder;
