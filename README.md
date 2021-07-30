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

Rodando as migrations
```
yarn typeorm migrate:run
```

Iniciando a aplicação em http://localhost:3333
```
yarn dev
```

### Modo de uso

```
### Cadastre novos usuários (post: {baseUrl}/users)
- Campos obrigatórios  
  - name - string
  - email - string
  - password - string

- Campo opcional (padrão: false)
  - admin - boolean

### Cadastre novas Tags (post: {baseUrl}/tags)
- Campos obrigatórios  
  - name - string

### Cadastre novos elogios (post: {baseUrl}/compliments)
- Campos obrigatórios  
  - tag_id - string uuid (tag)
  - user_receiver - string uuid (user)
  - message - string
```

### Como se autenticar na API

Caso esteja utilizando Insomnia, faça uma requisição do tipo POST para {baseUrl/login} informando seu usuário cadastrado (email, password). Copie o token de resposta.

### Como acessar rotas protegitas pela autenticação

Cole o Token obtido no login no modo Bearer.
