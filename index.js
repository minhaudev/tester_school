const fs = require('fs');
const path = require('path');

function renameFilesToLowercase(directory) {
    fs.readdir(directory, (err, files) => {
        if (err) {
            console.error('Error reading directory:', err);
            return;
        }

        files.forEach(file => {
            const oldPath = path.join(directory, file);
            const newPath = path.join(directory, file.toLowerCase());

            // Kiểm tra nếu là file (không phải thư mục)
            fs.stat(oldPath, (err, stats) => {
                if (err) {
                    console.error('Error getting file stats:', err);
                    return;
                }

                if (stats.isFile() && oldPath !== newPath) {
                    fs.rename(oldPath, newPath, (err) => {
                        if (err) {
                            console.error('Error renaming file:', err);
                        } else {
                            console.log(`Renamed: ${file} -> ${file.toLowerCase()}`);
                        }
                    });
                }
            });
        });
    });
}
const directory = 'C://Users//PC//Documents//lunasteel//src//assets//svgs';
renameFilesToLowercase(directory);