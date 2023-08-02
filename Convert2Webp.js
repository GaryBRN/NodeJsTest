const fs = require('fs-extra');
const path = require('path');
const sharp = require('sharp');

const directoryPath = 'C:\Users\hyqba\OneDrive\Projects\NoteJs\Photos\Raw';

fs.readdir(directoryPath, (err, files) => {
    if (err) {
        return console.log('Unable to scan directory: ' + err);
    } 

    files.forEach((file) => {
        const filePath = path.join(directoryPath, file);
        const outputFilePath = path.join(directoryPath, path.parse(file).name + '.webp');

        sharp(filePath)
            .webp()
            .toFile(outputFilePath)
            .then(function (info) {
                console.log('Image converted successfully: ', info);
            })
            .catch(function (err) {
                console.log('Error occurred during image conversion: ', err);
            });
    });
});
