const fs = require('fs');

// Read the index.html file
fs.readFile('/path/to/index.html', 'utf8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }

    // Extract the JavaScript code from the HTML file
    const regex = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi;
    const scripts = data.match(regex);

    // Write the JavaScript code to script.js
    fs.writeFile('/Users/suhanimukherjee/Desktop/c1i/script.js', scripts.join('\n'), 'utf8', (err) => {
        if (err) {
            console.error(err);
            return;
        }
        console.log('JavaScript code has been added to script.js');
    });
});