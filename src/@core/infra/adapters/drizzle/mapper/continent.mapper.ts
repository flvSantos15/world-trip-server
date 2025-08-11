import { IContinentEntityProps } from "../../../../domain/entities/continent.entity";

export function ContinentMapper(data: any): IContinentEntityProps {

  return {
    id: data.id,
    bio: data.bio,
    cities: data.cities,
    countries: data.countries,
    description: data.description,
    image_position: data.image_position,
    image_url: data.image_url,
    languages: data.languages,
    title: data.title
  }
}