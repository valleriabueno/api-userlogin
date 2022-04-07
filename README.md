
# API - Cadastro e Login de Usuário

![GitHub](https://img.shields.io/github/license/valleriabueno/api-userlogin?style=plastic)
![GitHub repo size](https://img.shields.io/github/repo-size/valleriabueno/api-userlogin?style=plastic)
![GitHub language count](https://img.shields.io/github/languages/count/valleriabueno/api-userlogin?style=plastic)
![GitHub top language](https://img.shields.io/github/languages/top/valleriabueno/api-userlogin?style=plastic)

Projeto desenvolvido em ambiente educacional (SoulCode Academy - BCW9), para demonstrar a criação de uma API de cadastro e autenticação de usuários, utilizando banco de dados não relacional MongoDb e biblioteca npmJS BCrypt.

API desenvolvida em JavaScript, utilizando:
- NodeJs
- Express
- Handlebars
- MongoDb

Para melhor visualização da usabilidade da API, foram desenvolvidos telas de cadastro e login utilizando a template engine Handlebars.


## Screenshots

![API User Login](https://github.com/valleriabueno/imagens/blob/main/api-userlogin/view-login.png)


## Autor

[@valleriabueno](https://github.com/valleriabueno)

[![linkedin](https://img.shields.io/badge/linkedIn-valeriadovalle-brightgreen)](https://www.linkedin.com/in/valeriadovalle/)


## 🛠 Habilidades
Javascript, NodeJS, Handlebars, SCSS, MongoDB


## Variáveis de Ambiente

Para rodar esse projeto, você vai precisar configurar as seguintes variáveis de ambiente no seu .env

`MONGODB_URI=`

`SESSION_SECRET=`


## Rodando localmente

Clone o projeto

```bash
  git clone https://github.com/valleriabueno/api-userlogin
```

Entre no diretório do projeto

```bash
  cd api-userlogin
```

Instale as dependências

```bash
  npm install
```

Inicie o servidor

```bash
  npm run dev
```

Visualização do Projeto no navegador

```bash
  http://localhost:3000
```

## Documentação da API

#### Rota Principal - View Login

```
  GET /login
```

| Descrição                           |
| :---------------------------------- |
| Rota principal. Renderização da View de Login. |

#### Rota View Cadastro

```
  GET /signup
```

| Descrição                           |
| :---------------------------------- |
| Renderização da View de Cadastro de Usuário. |


#### Rota - Login

```
  POST /login
```

| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `_id` | `string` | Efetuar verificação dos dados fornecidos e redirecionar para ambiente restrito. |

#### Rota - Cadastro

```
  POST /signup
```

| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `_id` | `string` | Cadastrar novo usuário. |


#### Logout

```
  GET /logout
```

| Descrição                           |
| :---------------------------------- |
| Encerra a sessão do usuário. |


## Documentação

[Swagger](#)

documentação em processo de criação, conforme [issue#6](https://github.com/valleriabueno/api-userlogin/issues/6).


## Feedback

Se você tiver algum feedback, por favor entre em contato atravé do e-mail: <valeriaabvalle@gmail.com>.


