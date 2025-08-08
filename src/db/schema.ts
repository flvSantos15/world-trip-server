import { integer, pgTable, text, varchar } from "drizzle-orm/pg-core"

export const continentsTable = pgTable("continents", {
  id: integer().primaryKey().generatedByDefaultAsIdentity(),
  title: varchar({ length: 255 }).notNull(),
  description: varchar({ length: 255 }).notNull(),
  image_url: varchar({ length: 255 }).notNull(),
  image_position: varchar({ length: 255 }).notNull(),
  bio: text().notNull(),
  countries: integer().notNull(),
  languages: integer().notNull(),
  cities: integer().notNull()
})