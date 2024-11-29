const newman = require('newman');
require('dotenv').config();
 
newman.run({
    collection:`https://api.postman.com/collections/35021614-71af1a1a-3e77-49f9-8281-17c085c6f68d?access_key=${process.env.access_key}`,
    //collection:require('./collection/collection.json'),
    reporters: 'htmlextra',
    iterationCount: 1,
    //environment: './env.json',
    reporter: {
        htmlextra: {
            export: './Reports/report.html', // If not specified, the file will be written to `newman/` in the current working directory.
        }
    }
}, function (err) {
    if (err) { throw err; }
    console.log('collection run complete!');
});