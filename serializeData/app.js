import http from 'http';
import {User} from './myFile.js'

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    console.log(req, "request");
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World');
});
// http.get('/', (req, res)=>{
//     console.log("request", req);
// });

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});


let data = 'a:3:{s:9:"knowledge";a:1:{i:0;s:3:"4.1";}s:6:"skills";a:4:{i:0;s:3:"1.1";i:1;s:3:"3.3";i:2;s:3:"4.1";i:3;s:3:"5.1";}s:9:"behaviour";N;}'

var someone = new User({ data });
someone.display();