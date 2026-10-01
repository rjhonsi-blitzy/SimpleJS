/** Request handler: passes the fixed string "Hello, World!\n" to res.end for every request. */
require('http').createServer((req,res)=>res.end('Hello, World!\n')).listen(3000,()=>console.log('Server running at http://127.0.0.1:3000/'));
