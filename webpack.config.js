const path = require('path');

module.exports = {
    entry: [
        './Problem_Set_4_JS/ps4-my-code.js',
    ],
    output: {
        filename: './main.js',
        path: path.resolve(__dirname, 'dist'),
    },
};

