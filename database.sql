CREATE TABLE "user" (
	"id" serial PRIMARY KEY,
	"username" VARCHAR(80) UNIQUE NOT NULL,
	"password" VARCHAR(1000) NOT NULL,
	"firstName" VARCHAR(100),
	"lastName" VARCHAR(100),
	"email" VARCHAR(100)
);

CREATE TABLE "links" (
	"id" serial PRIMARY KEY,
	"title" VARCHAR(600),
	"link" VARCHAR(1000),
	"importantMark" bool DEFAULT 'false',
	"priority" CHAR,
	"image" VARCHAR(300),
	"notes" VARCHAR(3000),
	"session_id" INT,
	"user_id" INT NOT NULL
);

CREATE TABLE "tags" (
	"id" serial PRIMARY KEY,
	"tagCategory" VARCHAR(200) NOT NULL,
	"user_id" INT,
	"icon" VARCHAR(300)
);

CREATE TABLE "sessions" (
	"id" serial PRIMARY KEY,
	"title" VARCHAR(300) NOT NULL,
	"user_id" INT
);

CREATE TABLE "link_tags" (
	"id" serial PRIMARY KEY,
	"link_id" serial NOT NULL,
	"tag_id" serial NOT NULL
);

ALTER TABLE "links" ADD CONSTRAINT "links_fk0" FOREIGN KEY ("session_id") REFERENCES "sessions"("id");
ALTER TABLE "links" ADD CONSTRAINT "links_fk1" FOREIGN KEY ("user_id") REFERENCES "user"("id");

ALTER TABLE "tags" ADD CONSTRAINT "tags_fk0" FOREIGN KEY ("user_id") REFERENCES "user"("id");

ALTER TABLE "sessions" ADD CONSTRAINT "sessions_fk0" FOREIGN KEY ("user_id") REFERENCES "user"("id");

ALTER TABLE "link_tags" ADD CONSTRAINT "link_tags_fk0" FOREIGN KEY ("link_id") REFERENCES "links"("id");
ALTER TABLE "link_tags" ADD CONSTRAINT "link_tags_fk1" FOREIGN KEY ("tag_id") REFERENCES "tags"("id");
