const fs = require('fs');

// Sync
const file = fs.readFileSync('./privacy.json', 'utf-8');
console.log(JSON.parse(file).password);

// Async
// fs.readFile('privacy.json', 'utf-8', function (err, data) {
//   console.log(JSON.parse(data).username)
// });


