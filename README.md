# 🚀 Fullstack ORM Template

Template de projeto **Fullstack** utilizando **Node.js**, **TypeScript**
e **Prisma ORM**, seguindo boas práticas de arquitetura, tipagem e
organização de código.

Ideal para iniciar projetos modernos com backend escalável e bem
estruturado.

------------------------------------------------------------------------

## 📌 Tecnologias utilizadas

-   **Node.js** (\>= 20)
-   **TypeScript**
-   **Prisma ORM (v7+)**
-   **PostgreSQL**
-   **TSX**
-   **Dotenv**
-   **Git**

------------------------------------------------------------------------

## 📂 Estrutura do projeto

    .
    ├── prisma/
    │   ├── schema.prisma
    │   └── generated/
    │       └── client/
    ├── src/
    │   ├── prisma.ts
    │   ├── server.ts
    │   └── routes/
    ├── .env
    ├── prisma.config.ts
    ├── package.json
    └── README.md

------------------------------------------------------------------------

## ⚙️ Pré-requisitos

-   Node.js **20+**
-   npm ou pnpm
-   Banco de dados (ex: PostgreSQL)

------------------------------------------------------------------------

## 🔧 Configuração do ambiente

### 1️⃣ Clonar o repositório

    git clone https://github.com/seu-usuario/seu-repositorio.git
    cd seu-repositorio

------------------------------------------------------------------------

### 2️⃣ Instalar dependências

    npm install

------------------------------------------------------------------------

### 3️⃣ Variáveis de ambiente

Crie o arquivo `.env`:

    DATABASE_URL="postgresql://user:password@localhost:5432/database"

------------------------------------------------------------------------

### 4️⃣ Prisma Client (Node.js)

``` ts
import { PrismaClient } from "../prisma/generated/client";
import { PrismaNodeAdapter } from "@prisma/adapter-node";

export const prisma = new PrismaClient({
  adapter: new PrismaNodeAdapter(),
  log: ['error', 'warn'],
});
```

------------------------------------------------------------------------

## 📄 Licença

MIT

------------------------------------------------------------------------

## 👤 Autor

**Jeferson Nascimento**
