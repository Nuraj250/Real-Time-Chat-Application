const socketIO = require('socket.io');

const setupSocket = (server) => {
  const io = socketIO(server);

  io.on('connection', (socket) => {
    console.log('New client connected');

    socket.on('joinRoom', (roomId) => {
      socket.join(roomId);
      console.log(`User joined room: ${roomId}`);
    });

    socket.on('message', (data) => {
      io.to(data.chatRoomId).emit('message', data);
    });

    socket.on('disconnect', () => {
      console.log('Client disconnected');
    });
  });

  return io;
};

module.exports = setupSocket;
