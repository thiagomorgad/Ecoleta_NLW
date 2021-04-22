// Aqui esta importando o express no typescript 
// Instalando tabem as tipagem do da lib do express 
import express from 'express';

// criando variavel server e atribuindo as funcionalidade do express
const server = express();


// aqui esta criando rota ger e retornado um json
server.get('/user', (request, response) => {
  return(
    response.json({
      messager: 'HOla thiago'
    })
  )
})


server.listen(3333)