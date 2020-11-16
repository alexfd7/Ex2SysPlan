const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {  
  res.setHeader('Content-Type', 'application/json')

  var returnData = {
    html_data : "Olá Mundo",
    javascript_data: "Js file"
  }
  res.end(JSON.stringify(returnData))
})

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept,x-access-token");
  res.header("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE,OPTIONS");
  next();
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`)
})