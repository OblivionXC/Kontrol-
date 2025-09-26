// server.js
const express = require('express');
const http = require('http');
const socketIo = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

// Gestion des connexions Socket.io
io.on('connection', (socket) => {
  console.log('Nouvel utilisateur connecté');
  
  socket.on('sendMessage', (message) => {
    io.emit('newMessage', message);
  });

  socket.on('disconnect', () => {
    console.log('Utilisateur déconnecté');
  });
});

server.listen(3000, () => {
  console.log('Serveur en écoute sur le port 3000');
});