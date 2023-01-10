import app from "./app.js"

const port = 8080

app.listen(port, ()=>{
    console.log(`Server iniciado com sucesso na porta ${port} http://localhost:${port}/`)
})