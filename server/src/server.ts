import express, { request, response } from 'express';
import routes from './routes';

const app = express();

app.use(express.json());
app.use(routes);

// rota: endereço completo da requisição
// recurso: qual entidade estamos acessando do sistema

// GET: buscar uma ou mais informações do backend
// POST: criar uma nova informação no backend
// PUT: atualizar uma informação existente no backend
// DELETE: remover uma informação do backend

// POST http://localhost:3333/users = criar um usuário
// GET http://localhost:3333/users = listar usuários
// GET http://localhost:3333/users/5 = buscar dados do usuário com ID 5


// request param: parâmetros que vem na própria rota que identificam um recurso
// query param: parâmetros que vem na própria rota, geralmente opcionais para filtros e paginação
// request body: parâmetros para criação/atualização de informações





app.listen(3333);

// 