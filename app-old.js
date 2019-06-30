const http = require("http");

http.createServer((req, res)=>{
    res.writeHead(200,{'Content-Type':'application/json'});
    let salida ={
        Nombre: "Felipe Cancino",
        Edad: 29,
        Hijos: 2,
        Estudios: "Superiores",
        Estado_Civil: "Comprometido",
        Novia: "Si",
        Nombre_Novia: "Natalia"
    }
    res.write(JSON.stringify(salida));
    //res.write('Hola mundo');
    res.end();
}).listen(3000);

console.log("Escuando el puerto 3000");