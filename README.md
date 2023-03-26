# Processo seletivo com a NG CASH

Esse projeto esta foi desenvolvido para o processo seletivo com a NG Cash para ele era requisitado um projeto full satck com back end e front end usando framworks nodes opcionais. Eu optei por ultilizar no back end o express, já no front ultilizei nextjs.

## Executando o projeto
para executar o projeto você precisa do docker engine e o docker compose instalado. feito isso o próximo passo é declarar as variáveis de ambitente

Backend
```env
PORT = 3333
HASH_SALT = 10
JWT_SECRET = SECRET
TIME_EXPIRATION_TOKEN = 24h
```

## Backend 
Stacks ultilizadas: Express, Typescript, prisma e prisma/client Dockerfile, brypt, body-parser, class-validator, cors, dotenv, jswonwebtoken, pdfmake, swagger-ui-express, vitest.

### documentação
você pode acessa a documentação do projeto em http://localhost:3333/doc

