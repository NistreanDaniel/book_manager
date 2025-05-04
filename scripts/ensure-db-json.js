const fs = require('fs');
const path = require('path');

const dbPath = path.join(__dirname, '../db.json');

if (!fs.existsSync(dbPath)) {
    const initialData = {
        books: []
    };

    fs.writeFileSync(dbPath, JSON.stringify(initialData, null, 2));
    console.log('Created db.json with default content.');
} else {
    console.log('db.json already exists.');
}
