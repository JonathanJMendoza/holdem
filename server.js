import http from 'node:http';
import {readFile} from 'node:fs/promises';
import path from 'node:path';
const root=process.cwd();
http.createServer(async(req,res)=>{try{const file=path.resolve(root,'.'+decodeURIComponent(new URL(req.url,'http://localhost').pathname));if(file!==root&&!file.startsWith(root+path.sep))throw Error();const target=file===root?path.join(root,'index.html'):file;if(!['index.html','style.css','src/app.js','src/engine.js'].includes(path.relative(root,target)))throw Error();const data=await readFile(target);res.setHeader('Content-Type',({'html':'text/html','js':'text/javascript','css':'text/css'})[target.split('.').pop()]||'application/octet-stream');res.end(data);}catch{res.writeHead(404);res.end('Not found');}}).listen(Number(process.env.PORT)||3000,'0.0.0.0');
