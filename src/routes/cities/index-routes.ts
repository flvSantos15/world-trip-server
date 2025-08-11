import { eq } from 'drizzle-orm'
import { z } from 'zod'
import { CityMapper } from '../../@core/infra/adapters/drizzle/mapper/city.mapper'
import { cities } from '../../db/schema'
import { db } from '../../lib/dizzle'
import { TFastifyTypedInstance } from '../../types/fastify-instance.types'

export async function CitiesRoutes(app: TFastifyTypedInstance) {
  app.post('/cities', {
    schema: {
      tags: ['cities'],
      description: 'Creation of city',
      body: z.object({
        name: z.string(),
        country: z.string(),
        continent: z.string()
      }),
      response: {
        201: z.null().describe('City created')
      }
    }
  }, async (req, res) => {
    const { continent, country, name } = req.body

    const city = {
      continent,
      country,
      name
    }

    await db.insert(cities).values(city)

    return res.status(201).send()
  })

  app.get('/cities', {
    schema: {
      tags: ['cities'],
      description: 'Get all cities',
      response: {
        200: z.object({
          cities: z.array(
            z.object({
              id: z.number(),
              name: z.string(),
              country: z.string(),
              image: z.string(),
              flag: z.string(),
              continent: z.string()
            })
          )
        })
      }
    }
  }, async (req, res) => {
    const citiesQuery = await db.select().from(cities)

    return res.status(200).send({ cities: citiesQuery.map(CityMapper) })
  })

  app.get('/city/:id', {
    schema: {
      tags: ['cities'],
      description: 'Get city by id',
      params: z.object({
        id: z.string()
      }),
      response: {
        200: z.object({
          city: z.object({
            id: z.number(),
            name: z.string(),
            country: z.string(),
            image: z.string(),
            flag: z.string(),
            continent: z.string()
          })
        })
      }
    }
  }, async (req, res) => {
    const { id } = req.params

    const [cityQuery] = await db.select().from(cities).where(eq(cities.id, Number(id)))

    return res.status(200).send({ city: CityMapper(cityQuery) })
  })

  // - Buscar com filtro.
  // - Buscar cidades do continente.
  // - Atualizar
  // - Deleter
}

