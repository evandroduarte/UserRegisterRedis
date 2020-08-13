require('dotenv/config')
const express = require('express');
const UserController = require('./app/controllers/UserController');
const BullBoard = require('bull-board');
const Queue = require('../src/app/lib/Queue');

const app = express();
BullBoard.setQueues(Queue.queues.map(queue => queue.bull));

app.use(express.json());
app.post('/users', UserController.store);

app.use('/admin/queues', BullBoard.UI);

app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`)
});