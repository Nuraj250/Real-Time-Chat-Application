const app = require('./app');
const http = require('http');
const setupSocket = require('./sockets/chatSocket');

const server = http.createServer(app);
const io = setupSocket(server);

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
