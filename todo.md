## World trip server

## Tecnologies

- Deploy (Hetzner ou AWS).
- Swagger.
- Testes.
- Banco de dados (Postgres).
- Drizzle ORM.
- Docker & docker compose.
- TypeScript.
- Redis.
- Fastify
- Zod.

## TODO

- Criar API de atualizar um continente.
- Criar API de upload de imagem para o continente.
- Criar API de criar cidade por continente.
- Criar API de buscar cidade dentro de um continente.
- Criar API de atualizar cidade.
- Criar API de buscar cidade por id.
- Criar API de upload de image para a cidade.
- Criar regra de não adicionar uma cidade que já existe.
- Criar regra de não adicionar continente que já existe.


## Rota

[] - POST /continent
[] - GET /continents
[] - GET /continent/:id
[] - PUT /continent/:id
[] - DELETE /continent/:id

[] - POST /continent/:id/cities
[] - GET /continent/:id/cities
[] - GET /continent/:id/cities/:id
[] - PUT /continent/:id/cities/:id
[] - DELETE /continent/:id/cities/:id

