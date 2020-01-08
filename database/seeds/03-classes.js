exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("name_fitClass")
  .truncate()
  .then(function() {
    // insert seed entries
    return knex("name_fitClass").insert([
      {
        // class_id: 2,
        // instructor_id: 1,
        class_type: "Yoga", 
        class_name: "Beginning Yoga",
        class_date: "march 30th",
        class_time: "8am",
        class_duration: "30min",
        class_city: "Irvine",
        class_state: "California", 
       class_intensity_level: "Easy",
       total_registered: 10,
       max_allowed_registered: 15,
      },
    ]);
  });
};
