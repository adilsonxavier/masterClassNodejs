const http = require("http")
const fs = require("fs")
const path = require("path")

// http.createServer((req, res) => {
//     res.write("oi tito 1607")
//     res.end()
// }).listen(5000)


// http.createServer((req, res) => {
//     if (req.url === "/") { 
//         res.write("<h1>Home Page</h1>") 
//         res.end()
//     //     ou
//     //    return  res.end("<h1>Home Page</h1>") 
//     }
//     else
//     return res.end("<h1>pag: "+ req.url+ "</h1>") 
// }).listen(5000, () => { console.log("running") })

http.createServer((req, res) => {
    if (req.url === "/") { 
       fs.readFile(
         path.join(__dirname, "public","index.html"), //=> primeiro argumento de readFile
         // A constante __dirname é nativa e não precisa importar
         // O path.join poderia se substituido pelo caminho absoluto como string
         // O path.join aceita quantos argumentos quisermos, na ordem do caminho do arquivo a ser lido
         (err,content) => {//-> segundo arqumento de fs.readFile. O primeiro argumento é sempre a variável pra erro
                        // e o segundo é o conteúdo do arquivo lido
          if(err){ 
            throw err
            //console.log("erro foi:: "+ err)
            // A mensagem de erro apareceu no console do node ( não do browser)
          }
          res.end(content) // não precisa de else pois se der erro no if acima esta linha não será executada
	 }
       )
    }
   
}).listen(5000, () => { console.log("running") })