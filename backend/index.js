const express = require('express');
const app = express();

/*
app.get('/', (req, res) => {
    res.send('Server is Ready');
});*/

app.get('/api/jokes', (req, res) => {
    const jokes = [
        {
            "id": 1,
            "title": "One Fine Day",
            "content": "Međa"
        },
        {
            "id": 2,
            "title": "Devil's in the Details, The",
            "content": "Kalinovskaya"
        },
        {
            "id": 3,
            "title": "Ugly",
            "content": "Kudusan"
        },
        {
            "id": 4,
            "title": "Blonde Venus",
            "content": "Siem Reap"
        },
        {
            "id": 5,
            "title": "$5 a Day",
            "content": "Köln"
        }
    ];
    res.json(jokes);
});

const port = 3000;
app.listen(port, () => {
    console.log(`Server started on  http://localhost:${port}`);
});
