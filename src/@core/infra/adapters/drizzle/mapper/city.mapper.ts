import { ICitieEntityProps } from "../../../../domain/entities/citie.entity";

export function CityMapper(data: any): ICitieEntityProps {

  return {
    id: data.id,
    name: data.name,
    continent: data.continent,
    country: data.country,
    flag: data.flag,
    image: data.image
  }
}