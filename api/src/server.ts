// Aqui esta importando o express no typescript 
// Instalando tabem as tipagem do da lib do express 
import express from 'express';
// criando variavel server e atribuindo as funcionalidade do express
const server = express();
  const listagemName  = ['thiago', "aline", 'Fernando', 'alanna']

// aqui esta criando rota ger e retornado um json
server.get('/user', (request, response) => {
  response.json(listagemName)
})


server.listen(3333);