exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("name_fitClass").then(function() {
    // insert seed entries
    return knex("name_fitClass").insert([
      {
        class_id: 1,
        class_name: "Yoga Masters", 
        class_type: "Yoga",
        class_date: "March 30th",
        class_time: "9am",
        class_duration: 30,
        class_duration: 30,
        class_city: "Irvine",
        class_state: "California",
       class_intensity_level: "Easy",
       total_registered: 10,
       max_allowed_registered: 15
      },
    ]);
  });
};