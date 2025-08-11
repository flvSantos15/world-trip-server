export type TBetterImagePosition = "bottom" | "center"

export interface IContinentEntityProps {
  id: number
  title: string
  description: string
  image_url: string
  image_position: TBetterImagePosition
  bio: string
  countries: number,
  languages: number,
  cities: number
}