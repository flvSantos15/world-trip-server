CREATE TABLE "continents" (
	"id" uuid PRIMARY KEY NOT NULL,
	"title" varchar(255) NOT NULL,
	"description" varchar(255) NOT NULL,
	"image_url" varchar(255) NOT NULL,
	"image_position" varchar(255) NOT NULL,
	"bio" varchar(255) NOT NULL,
	"countries" integer NOT NULL,
	"languages" integer NOT NULL,
	"cities" integer NOT NULL
);
