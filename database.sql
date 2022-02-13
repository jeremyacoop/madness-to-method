CREATE TABLE "user" (
	"id" SERIAL PRIMARY KEY,
	"username" VARCHAR(80) UNIQUE NOT NULL,
	"password" VARCHAR(1000) NOT NULL,
	"firstName" VARCHAR(100),
	"lastName" VARCHAR(100),
	"email" VARCHAR(100)
);

-- The session_id column may be replaced or augmented later,
-- depending on how I decide the system should work
CREATE TABLE "links" (
	"id" SERIAL PRIMARY KEY,
	"title" VARCHAR(600),
	"link" VARCHAR(1000),
	"importantMark" BOOL DEFAULT 'false',
	"priority" CHAR,
	"image" VARCHAR(300),
	"notes" VARCHAR(3000),
	"session_id" INT,
	"user_id" INT NOT NULL
);

CREATE TABLE "tags" (
	"id" SERIAL PRIMARY KEY,
	"tagCategory" VARCHAR(200) NOT NULL,
	"user_id" INT,
	"icon" VARCHAR(300)
);

CREATE TABLE "sessions" (
	"id" SERIAL PRIMARY KEY,
	"title" VARCHAR(100) NOT NULL,
	"user_id" INT,
	"icon" VARCHAR(300)
);

CREATE TABLE "link_tags" (
	"id" SERIAL PRIMARY KEY,
	"link_id" SERIAL NOT NULL,
	"tag_id" SERIAL NOT NULL
);

CREATE TABLE "link_sessions" (
	"id" SERIAL PRIMARY KEY,
	"link_id" INT NOT NULL,
	"session_id" INT NOT NULL
);

ALTER TABLE "links" ADD CONSTRAINT "links_fk0" FOREIGN KEY ("session_id") REFERENCES "sessions"("id");
ALTER TABLE "links" ADD CONSTRAINT "links_fk1" FOREIGN KEY ("user_id") REFERENCES "user"("id");

ALTER TABLE "tags" ADD CONSTRAINT "tags_fk0" FOREIGN KEY ("user_id") REFERENCES "user"("id");

ALTER TABLE "sessions" ADD CONSTRAINT "sessions_fk0" FOREIGN KEY ("user_id") REFERENCES "user"("id");

ALTER TABLE "link_tags" ADD CONSTRAINT "link_tags_fk0" FOREIGN KEY ("link_id") REFERENCES "links"("id");
ALTER TABLE "link_tags" ADD CONSTRAINT "link_tags_fk1" FOREIGN KEY ("tag_id") REFERENCES "tags"("id");

ALTER TABLE "link_sessions" ADD CONSTRAINT "link_sessions_fk0" FOREIGN KEY ("link_id") REFERENCES "links"("id");
ALTER TABLE "link_sessions" ADD CONSTRAINT "link_sessions_fk1" FOREIGN KEY ("session_id") REFERENCES "sessions"("id");
