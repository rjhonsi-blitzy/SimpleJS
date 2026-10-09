/** HTTP request handler that replies to every request with the fixed text "Hello, World!". */
require('http').createServer((req,res)=>res.end('Hello, World!\n')).listen(3000,()=>console.log('Server running at http://127.0.0.1:3000/'));
