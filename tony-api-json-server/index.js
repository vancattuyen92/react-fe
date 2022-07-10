const jsonServer = require('json-server');
const server = jsonServer.create();
const middlewares = jsonServer.defaults();

// router
const router = jsonServer.router('db.json');

// middleware
server.use(middlewares);

// port
const PORT = process.env.PORT || 4000;

server.use(jsonServer.bodyParser);

// start server
server.use('/api', router);
server.listen(PORT, () => {
  console.log(`JSON Server is running with localhost:${PORT}`)
})