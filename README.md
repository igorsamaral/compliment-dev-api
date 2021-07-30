# NodeJS API - Elogiar dev do time

### Objetivo

A ideia dessa API é elogiar os devs do seu time marcando uma Tag do seu gosto e escrevendo uma mensagem de incentivo para ele.

Nessa API é possível você cadastrar usuários, cadastrar Tags e inserir elogios. Mas existem algumas regras... Precisa está autenticado para realizar as operações de "cadastro de tag" e "inserção de elogios". Apenas administradores podem cadastrar novas Tags e você não pode inserir elogios para você mesmo.

### Features da API

- Cadastro e consulta de Usuários
- Cadastro e consulta de Tags
- Cadastro e consulta de Elogios
- Autenticaçao JWT
- Middleware para validar se está autenticado
- Middleware para validar se é usuário administrador (apenas na criação de Tag)

### Recursos utilizados

- TypeScript
- Express
- Sqlite
- TypeORM
- Class Transformer
- Json Web Token
- Jest

### Instalação

Clonando projeto para seu ambiente
```
git clone https://github.com/igorsamaral/compliment-dev-api.git
```

Acessando o diretório do projeto
```
cd compliment-dev-api
```

Instalando dependências
```
yarn
```

Iniciando a aplicação em http://localhost:3333
```
yarn dev
```

Rodando as migrations
```
yarn typeorm migration:run
```

### Endpoints

Cadastrar novo usuário
```
HTTP: POST
{baseUrl}/users

{
  "name": "Pedro Cabral",
  "email": "pedro.cabral@gmail.com",
  "password": "root",
  "admin": true
}

admin: (optional, default: false)
```

Listar usuários
```
HTTP: GET
{baseUrl}/users

Rota protegida: Coloque seu Token em Auth Bearer
```

Cadastrar nova tag
```
HTTP: POST
{baseUrl}/tags

{
  "name": "Profissionalismo",
}

Rota protegida: Coloque seu Token em Auth Bearer
Precisa ser admin = true
```

Lista tags
```
HTTP: GET
{baseUrl}/tags
```

Cadastrar novo elogio
```
HTTP: POST
{baseUrl}/compliments

{
  "tag_id": "__UUID_DO_USUÁRIO__",
  "user_receiver": "__UUID_DO_USUÁRIO__",
  "message": "Parabéns pelo seu compromisso!"
}

Rota protegida: Coloque seu Token em Auth Bearer
```

Listar elogios enviados
```
HTTP: GET
{baseUrl}/users/compliments/sent

Rota protegida: Coloque seu Token em Auth Bearer
```

Listar elogios recebidos
```
HTTP: GET
{baseUrl}/users/compliments/received

Rota protegida: Coloque seu Token em Auth Bearer
```

Autenticar (LogIn)
```
HTTP: POST
{baseUrl}/login

{
  "email": "__SEU_EMAIL__",
  "password": "__SUA_SENHA__"
}
```

### Como se autenticar na API

Caso esteja utilizando Insomnia, faça uma requisição do tipo POST para {baseUrl/login} informando seu usuário cadastrado (email, password). Copie o token de resposta.

### Como acessar rotas protegitas pela autenticação

Cole o Token obtido no login no modo Bearer.
