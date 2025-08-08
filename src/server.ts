import fastify from "fastify";

import { ContinentsRoutes } from "./routes/continents/index-routes";

const app = fastify()

app.register(ContinentsRoutes)

app.listen({ port: 3333 }).then(() => {
  console.log("HTTP is running")
})