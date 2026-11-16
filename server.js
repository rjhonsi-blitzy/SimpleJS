/** Request handler that answers every HTTP request with the body "Hello, World!". */
require('http').createServer((req,res)=>res.end('Hello, World!\n')).listen(3000,()=>console.log('Server running at http://127.0.0.1:3000/'));
