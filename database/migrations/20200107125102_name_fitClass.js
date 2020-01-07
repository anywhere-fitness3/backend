
exports.up = function(knex) {
  
};

exports.down = function(knex) {
  
};
CREATE TABLE "Name_FitClass" (
	"class_id" serial NOT NULL,
	"class_name" varchar(255),
	"class_type" varchar(255),
	"class_duration" varchar(255),
	"class_intensity_level" varchar(255),
	"class_location" varchar(255),
	"total_registered" varchar(255),
	"max_allowed_registered" varchar(255),
	CONSTRAINT "Name_FitClass_pk" PRIMARY KEY ("class_id")
) WITH (
  OIDS=FALSE
);


ALTER TABLE "Name_FitClass" 
ADD CONSTRAINT "Name_FitClass_fk0" 
FOREIGN KEY ("class_id") REFERENCES "Users"("class_id");
