const http = require("http")
const data = require("./urls.json")
const URL = require("url")
const fs = require("fs")
const path = require("path")


function writeFile(cb){ // função callback
     fs.writeFile(
        path.join(__dirname,"urls.json"),
        JSON.stringify( data,null,2),
         err => {
             if(err) throw err

            cb(JSON.stringify({message:"ok"}))
         }
        )
}

http.createServer((req, res) => {
    console.log(JSON.stringify(URL.parse(req.url, true).query));
    const { name, url, del,create } = URL.parse(req.url, true).query
    // if (!name || !url)
    //     return res.end("show all")
    if (del){
        data.urls = data.urls.filter(item=> item.url != url)
        console.log("data:: "+ JSON.stringify(data))
        // return fs.writeFile(
        //     path.join(__dirname,"urls.json"),
        //     JSON.stringify( data,null,2),
        //      err => {
        //          if(err) throw err

        //         res.end(JSON.stringify({message:"ok"}))
        //      }
        //     )
         
          //
         // return writeFile(message => res.end(JSON.stringify({message:"ok cb"})))
        return writeFile( message => res.end(message)) // chamando a função callback writeFile(cb) passando uma função como 
                                                        // parâmetro
                                                                
    }
    if(create){
        var novosite = {name:name,url:url}
        data.urls.push(novosite)
        return writeFile( message => res.end(message))
    }
    console.log("linha 28")
       // return res.end("delete")
    return res.end(JSON.stringify(data))

}).listen(3000, () => { console.log("running api 2") }) 