# <h1>Desenvolvimento Logtime</h1>

  Aplicação com CRUD de clientes utilizando base de dados na nuvem.

  ## Tecnologias utilizadas:
  * ReactJS
  * CSS
  * Material-UI
  * Axios
  * Vercel
  * AWS RDS MySQL
  * Fly.io
  * Node.js
  * Git

  ## Deploys:
    * Frontend: [Vercel](https://development-challenge-6zzd2zs1b-danbaziewicz.vercel.app/)
    * Backend: [Fly.io](https://challengemedcloud.fly.dev)
    * Banco de Dados: AWS RDS MySql

    ## Para rodar o projeto
    Na pasta raiz do projeto:
    ```
    cd back
    ```
    Instale as dependências:
    ```
    npm i
    ```
    Execute a API:
    ```
    nodemon server.js

    Para iniciar o front:
    ```
    cd front
    ```
    Instale as dependências:
    ```
    npm i
    Execute o projeto:
    ```
    npm run dev

    ## Instruções da API:

    URL Base: https://challengemedcloud.fly.dev

    #### POST /users
       body:
       {
        "name": "Clayton Anderson",
		"birth_date": "1992-07-20",
		"email": "claytonanderson@exemple.com",
		"address": "James St"
       }

       response:
       {
          "msg": "Usuário inserido com sucesso",
          "user": {
		    "name": "teste api",
		    "birth_date": "1992-07-11",
		    "email": "adsdasd@dasdas.com",
		    "address": "rua zerozerozero"
	      }
        }

    #### GET /users
    response:
    {
	"users": [
		{
			"id": 1,
			"name": "Clayton Anderson",
			"birth_date": "1992-07-20",
			"email": "claytonanderson@exemple.com",
			"address": "James St"
		},
		{
			"id": 12,
			"name": "Vivan Diaz",
			"birth_date": "1992-08-04",
			"email": "vivan.diaz@example.com",
			"address": "Valwood Pkwy"
		}
    ]}

    #### GET /users/id/:id
    response:
    {
	"usuário": [
		{
			"id": 1,
			"name": "Clayton Anderson",
			"birth_date": "1992-07-20T03:00:00.000Z",
			"email": "claytonanderson@exemple.com",
			"address": "James St"
		}
	]
    }

    #### PUT /users/id/:id
    body:
    {
		"name": "Edit Test",
		"birth_date": "1992-07-11",
		"email": "edit.text@exemple.com",
		"address": "Valwood Pkwy"
    }
    response:
    {
	"msg": "Usuário atualizado com sucesso",
	"user": {
		"name": "Edit Test",
		"birth_date": "1992-07-11",
		"email": "edit.text@exemple.com",
		"address": "Valwood Pkwy"
	}
    }

    #### DELETE /users/id/:id
    response:
    {
	"msg": "Usuário 1 deletado com sucesso"
    }
