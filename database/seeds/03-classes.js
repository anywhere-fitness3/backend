exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("name_fitClass").then(function() {
    // insert seed entries
    return knex("name_fitClass").insert([
      {
        class_id: 1,
        class_name: "Yoga Masters", 
        class_type: "Yoga",
        class_duration: 30,
       class_intensity_level: "Easy",
       class_location: "Los Angeles",
       total_registered: 10,
       max_allowed_registered: 15,
       instructor_id: 2,
      },
    ]);
  });
};
