
-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!
CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL
);

CREATE TABLE "links" (
	"id" serial NOT NULL,
	"title" varchar(512),
	"link" varchar(1000),
	"importantMark" bool DEFAULT false,
	"priority" char,
	"image" varchar(255),
	"notes" varchar(2048),
	"session_id" int,
	CONSTRAINT "links_pk" PRIMARY KEY ("id")
);

CREATE TABLE "tags" (
	"id" serial NOT NULL,
	"tagCategory" varchar(128) NOT NULL UNIQUE,
	"user_id" int NOT NULL,
	"link_id" int NOT NULL,
	"icon" varchar(255),
	CONSTRAINT "tags_pk" PRIMARY KEY ("id")
);

CREATE TABLE "sessions" (
	"id" serial NOT NULL,
	"tag" varchar(255) NOT NULL,
	"user_id" int NOT NULL,
	CONSTRAINT "sessions_pk" PRIMARY KEY ("id")
);

ALTER TABLE "links" ADD CONSTRAINT "links_fk0" FOREIGN KEY ("session_id") REFERENCES "sessions"("id");

ALTER TABLE "tags" ADD CONSTRAINT "tags_fk0" FOREIGN KEY ("user_id") REFERENCES "user"("id");
ALTER TABLE "tags" ADD CONSTRAINT "tags_fk1" FOREIGN KEY ("link_id") REFERENCES "links"("id");

ALTER TABLE "sessions" ADD CONSTRAINT "sessions_fk0" FOREIGN KEY ("user_id") REFERENCES "user"("id");
