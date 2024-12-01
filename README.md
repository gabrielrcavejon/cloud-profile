# Cloud Profile

Cloud Profile é um projeto node.js, onde fotos e currículos podem ser compartilhados.

## Instalação

Passos para instalar e configurar o projeto no Debian (Verifique as instalações nos sites oficiais):

1. Faça um update: `sudo apt update`
2. Instale o Node.js e npm: `sudo apt install nodejs npm`
4. Instale o postgresql (Ou outro de sua preferência)

Agora com o ambiente pronto, execute os seguintes passos:

1. Clone o repositório: `git clone https://github.com/gabrielrcavejon/cloud-profile.git`
2. Entre no diretório do frontend: `cd cloud-profile/frontend`
3. Instale as dependências do frontend: `npm install`
4. Volte ao diretório do projeto: `cd ..`
5. Entre no diretório do backend: `cd backend`
6. Instale as dependências do backend: `npm install`
7. Mude o .env.example para .env e preencha a DATABASE_URL corretamente
8. Execute esse comando para deixar os schemas do banco igual ao do model do prisma: `npx prisma db push`

## Como Usar  

1. Na pasta frontend execute: `npm run dev`
2. Na pasta backend execute: `npm run start`
3. Acesse no navegador: `http://localhost:5173/register` para criar um registro, e `http://localhost:5173/users` para ver registros 
