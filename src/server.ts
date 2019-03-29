
import * as http from 'http';
import { app } from './app';

const port = process.env.PORT || 8080;
const server = http.createServer(app);

server.listen(port);
console.log('Server start listening on port: ' + port);
