import { integer, pgTable, serial, text, varchar } from "drizzle-orm/pg-core";

export const continentsTable = pgTable("continents", {
  id: serial("id").primaryKey(),
  title: varchar("title", { length: 255 }).notNull(),
  description: varchar("description", { length: 255 }),
  image_url: varchar("image_url", { length: 255 }),
  image_position: varchar("image_position", { length: 255 }),
  bio: text("bio").notNull(),
  countries: integer("countries").notNull(),
  languages: integer("languages").notNull(),
  cities: integer("cities").notNull(),
});

export const cities = pgTable('cities', {
  id: serial("id").primaryKey(),
  name: varchar('name', { length: 255 }).notNull(),
  country: varchar('country', { length: 255 }).notNull(),
  flag: varchar('flag', { length: 255 }),
  continent: varchar('continent', { length: 255 }).notNull(),
  image: varchar('image', { length: 255 }),
})