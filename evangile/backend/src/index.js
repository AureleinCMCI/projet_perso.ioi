const express = require('express');
const app = express();
const db = require('./persistence');
const getGreeting = require('./routes/getGreeting');
const getItems = require('./routes/getItems');
const addItem = require('./routes/addItem');
const updateItem = require('./routes/updateItem');
const deleteItem = require('./routes/deleteItem');
const loginRoute = require('./routes/login');
const mysqlDb = require('./persistence/mysql');

app.use(express.json());
app.use(express.static(__dirname + '/static'));

app.use('/api', loginRoute);
app.get('/api/greeting', getGreeting);
app.get('/api/items', getItems);
app.post('/api/items', addItem);
app.put('/api/items/:id', updateItem);
app.delete('/api/items/:id', deleteItem);

async function startServer() {
    try {
        await db.init();         // init MongoDB ou autre base
        await mysqlDb.init();    // init MySQL
        const PORT = process.env.PORT || 3000;
        app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
    } catch (err) {
        console.error('Erreur de démarrage du serveur :', err);
        process.exit(1);
    }
}

const gracefulShutdown = () => {
    db.teardown()
        .catch(() => {})
        .then(() => process.exit());
};

startServer();

process.on('SIGINT', gracefulShutdown);
process.on('SIGTERM', gracefulShutdown);
process.on('SIGUSR2', gracefulShutdown); // Nodemon
