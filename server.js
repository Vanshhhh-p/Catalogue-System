
const express = require('express');
const app = express();

app.use(express.json());
app.use(express.static('public'));

// Menu data stored in memory
let items = [
    { id: 1, name: 'Veg Thali', price: 90 },
    { id: 2, name: 'Paneer Roll', price: 70 }
];

let nextId = 3;

// GET /items - Get all dishes
app.get('/items', (req, res) => {
    res.json(items);
});

// GET /items/:id - Get one dish
app.get('/items/:id', (req, res) => {
    const item = items.find(i => i.id === Number(req.params.id));

    if (!item) {
        return res.status(404).json({ error: 'not found' });
    }

    res.json(item);
});


// POST /items - Add a new dish
app.post('/items', (req, res) => {

    const { name, price } = req.body;

    // Check whether dish name is provided
    if (!name) {
        return res.status(422).json({
            error: 'name required'
        });
    }

    // Create a new dish
    const item = {
        id: nextId++,
        name: name,
        price: Number(price) || 0
    };

    // Add dish to the menu
    items.push(item);

    // Send the newly created dish
    res.status(201).json(item);
});


app.listen(3000, () => {
    console.log('Catalogue on http://localhost:3000');
});
