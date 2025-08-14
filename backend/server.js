const http = require('http');
const app = require('./src/app')
const connectDB = require('./src/db/db')
const { setupSocketServer } = require('./src/socket/server.socket');

// Connect to the database
connectDB();

const httpServer = http.createServer(app);
setupSocketServer(httpServer);

httpServer.listen(3000, () => {
    console.log("server is running on port 3000");
}); 

