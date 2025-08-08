import { FastifyInstance } from 'fastify'

import { continentsTable } from '../../db/schema'
import { db } from '../../lib/dizzle'
import { IContinentEntityProps } from '../entities/continent-entity'

const continent: IContinentEntityProps[] = [
  {
    id: 1,
    title: "América do Norte",
    description: "O Shopping Center do mundo",
    image_url: "https://images.unsplash.com/photo-1610312278520-bcc893a3ff1d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=730&q=80",
    image_position: "bottom",
    bio: "A América do Norte é um subcontinente que compreende a porção setentrional do continente americano. Existem duas formas de classificar esse continente: a primeira considera que a América do Norte é apenas a parte mais setentrional da América, separada da América Central na fronteira entre o México e a Guatemala, a segunda classificação reconhece apenas uma América do Norte e uma América do Sul, traçando o limite no Istmo do Panamá (umas vezes no Canal do Panamá, outras na fronteira entre o Panamá e a Colômbia). Pela última definição, a América do Norte incluiria a América Central Continental e Insular (Caribe).",
    countries: 3,
    languages: 6,
    cities: 127
  }
]

export async function ContinentsRoutes(app: FastifyInstance) {
  // - Criar

  app.post('/continents', async (req, res) => {
    await db.insert(continentsTable).values(continent)

    return res.status(201).send({ data: "Continent created!" })
  })

  app.get('/continents', async (req, res) => {
    const continents = await db.select().from(continentsTable)

    return res.status(200).send({ data: continents })
  })

  // - Buscar 1
  // - Buscar com filtro.
  // - Buscar cidades do continente.
  // - Atualizar
  // - Deleter
}

