require('dotenv').config();
const path = require('path')
const express = require('express');
const PORT = process.env.PORT;
const app = express();

app.use(express.static(path.join(__dirname, 'public')));

const server = app.listen(PORT, () => 
    console.log(`💬server on PORT ${PORT}`)
);

const io = require('socket.io')(server)

io.on('connection', onConnected);

let socketConnected = new Set()


function onConnected(socket) {
    console.log(socket.id);
    socketConnected.add(socket.id)

    io.emit('clients-total', socketConnected.size)
    
    socket.on('disconnect', () => {
        console.log('Socket discoonected', socket.id)
        socketConnected.delete(socket.id)
        io.emit('clients-total', socketConnected.size)
    })

    socket.on('message', (data) => {
        console.log(data)
        socket.broadcast.emit('chat-message', data)
    })

    socket.on('feedback', (data) => {
        socket.broadcast.emit('feedback', data)
    })
}