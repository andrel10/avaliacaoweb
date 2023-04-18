const express = require("express")

const routes = express.Router()

let indice = 4

var lista = [{"id": 1, "descricao":"Camiseta", "preço":20.99, "cores":["preto","branco","cinza"]},
{"id": 2, "descricao":"Calça jeans", "preco":79.99, "cores":["preto, Branco, azul escuro"]},
{"id": 3, "descricao":"Tênis esportivo", "preco":149.99, "cores":["preto, marrom"]},
{"id": 4, "descricao": "Jaqueta de Couro", "preco": 99.99, "cores": ["preto", "marrom"]}
]

routes.get("/",(req, res)=>{
    res.status(200).json(lista)
})

routes.get("/:id",(req, res)=>{
    // res.status(200).json(lista[req.params.id-1])
    causa = lista.find(i => i.id == req.params.id)  
    if(causa){
        res.status(200).json(lista[req.params.id-1])

    } else{
      res.status(404).send("servidor fora de ar!!")
    }
  }
)

routes.delete("/:id",(req, res)=>{
    lista.splice(req.params.id-1,1)
    res.status(200).send("OK")
})

routes.post("/",(req, res)=>{
    lista.push(req.body)
    res.status(200).redirect("/")
}
)

routes.put("/:id",(req, res)=>{
    console.log(req.body)
    lista[req.params.id-1] = req.body
    res.status(200).send("OK")
})

module.exports = routes