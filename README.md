# Projeto Publicação de Artigos

Siga os passos abaixo para rodar a aplicação

### Antes de tudo:
- Criar localmente um arquivo .env onde tem o arquivo modelo Backend/env_file, e insira um código qualquer dentro dele em 'authSecret'
- Alterar seu localhost no arquivo \frontend\src\global.js

## Instruções

1. Banco de Dados

- Pode instalar o Postgres e MongoDB
- Pode também logar pelo terminal (user: postgres, senha: 123456)

Use os seguintes comandos e já será possível ter acesso ao Banco:
```bash
psql U- postgres
\l
\c knowledge
\dt
```

2. Backend (Server)

- Abrir o arquivo /Backend em sua IDE Node.js
- É possível testar com o Postman
- Use os comandos a seguir:

```bash
npm i
npm start
```
Deve ser possível ver "Backend executing..." no prompt

3. Frontend (Client)

- Use os comandos a seguir:

```bash
npm i
npm run serve
```

## Observações

- Caso os migrations do Banco de Dados não apareçam, pode usar o comando a seguir na pasta Backend:

```python
knex migrate:latest
```
### Bugs no Backend
- Sem bugs aparentes

### Bugs no Frontend
- Tomar cuidado ao cadastrar uma Categoria, pois um path registrado de maneira errada pode comprometer o banco
- Dê preferência a nomes simples ao registrar Categoria
