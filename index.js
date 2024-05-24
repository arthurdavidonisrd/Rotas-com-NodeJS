const express = require('express')
const path = require('path')

const app = express()

const basePath = path.join(__dirname, "templates")

const port = 3000



app.use(
    express.urlencoded({
        extended: true
    })
)

app.use(
    express.json()
)

app.get('/', (req, res) =>{
    res.sendFile(`${basePath}/index.html`)
})


app.get('/users/add', (req,res) =>{
    res.sendFile(`${basePath}/form.html`)
})

app.post('/users/savedb', (req,res) =>{
    console.log(req.body)

    const name = req.body.name
    const age = req.body.age

    console.log(`O usuario se chama ${name} e possui ${age} anos`)

    res.sendFile(`${basePath}/form.html`)
    
})


app.listen((port), () =>{
    console.log(`O servidor esta rodando na porta ${port}`)
})



