import { integer, pgTable, serial, text, varchar } from "drizzle-orm/pg-core";

export const continentsTable = pgTable("continents", {
  id: serial("id").primaryKey(), // correct use of serial
  title: varchar("title", { length: 255 }).notNull(),
  description: varchar("description", { length: 255 }),
  image_url: varchar("image_url", { length: 255 }).notNull(),
  image_position: varchar("image_position", { length: 255 }).notNull(),
  bio: text("bio").notNull(),
  countries: integer("countries").notNull(),
  languages: integer("languages").notNull(),
  cities: integer("cities").notNull(),
});