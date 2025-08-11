import { eq } from 'drizzle-orm'
import { z } from 'zod'
import { continentsTable } from '../../db/schema'
import { db } from '../../lib/dizzle'
import { TFastifyTypedInstance } from '../../types/fastify-instance.types'

export async function ContinentsRoutes(app: TFastifyTypedInstance) {
  app.post('/continents', {
    schema: {
      tags: ['continents'],
      description: 'Creation of continents',
      body: z.object({
        title: z.string(),
        description: z.string().optional(),
        image_url: z.string(),
        image_position: z.string(),
        bio: z.string(),
        countries: z.number(),
        languages: z.number(),
        cities: z.number()
      }),
      response: {
        201: z.null().describe('Continent created')
      }
    }
  }, async (req, res) => {
    const { bio, cities, countries, image_position, image_url, languages, title, description } = req.body

    const continent = {
      bio,
      cities,
      countries,
      image_position,
      image_url,
      languages,
      title,
      description
    }

    await db.insert(continentsTable).values(continent)

    return res.status(201).send()
  })

  app.get('/continents', {
    schema: {
      tags: ['continents'],
      description: 'Get all continents',
      response: {
        200: z.object({
          continents: z.array(
            z.object({
              id: z.number(),
              title: z.string(),
              description: z.string().nullable(),
              image_url: z.string(),
              image_position: z.string(),
              bio: z.string(),
              countries: z.number(),
              languages: z.number(),
              cities: z.number()
            })
          )
        })
      }
    }
  }, async (req, res) => {
    const continents = await db.select().from(continentsTable)

    return res.status(200).send({ continents: continents })
  })

  app.get('/continent/:id', {
    schema: {
      tags: ['continents'],
      description: 'Get all continents',
      params: z.object({
        id: z.string()
      }),
      response: {
        200: z.object({
          continent: z.object({
            id: z.number(),
            title: z.string(),
            description: z.string().nullable(),
            image_url: z.string(),
            image_position: z.string(),
            bio: z.string(),
            countries: z.number(),
            languages: z.number(),
            cities: z.number()
          })
        })
      }
    }
  }, async (req, res) => {
    const { id } = req.params

    const [continent] = await db.select().from(continentsTable).where(eq(continentsTable.id, Number(id)))

    return res.status(200).send({ continent: continent })
  })

  // - Buscar com filtro.
  // - Buscar cidades do continente.
  // - Atualizar
  // - Deleter
}

