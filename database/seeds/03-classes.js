exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("name_fitClass").then(function() {
    // insert seed entries
    return knex("name_fitClass").insert([
      {
        class_id: 1,
        class_name: "Yoga Padawan", 
        class_type: "Yoga",
        class_date: "March 30th",
        class_time: "9am",
        class_duration: 30,
        class_city: "Irvine",
        class_state: "California",
       class_intensity_level: "Easy",
       total_registered: 10,
       max_allowed_registered: 15
      },
      {
        class_id: 2,
        class_name: "H2O Dance", 
        class_type: "Water Aerobics",
        class_date: "April 10th",
        class_time: "8am",
        class_duration: 30,
        class_city: "Newport",
        class_state: "California",
       class_intensity_level: "Easy",
       total_registered: 3,
       max_allowed_registered: 5
      },
      {
        class_id: 3,
        class_name: "Jazz Masters", 
        class_type: "Jazz Dance",
        class_date: "Feb 15th",
        class_time: "8pm",
        class_duration: 60,
        class_city: "Cerritos",
        class_state: "California",
       class_intensity_level: "Advanced",
       total_registered: 8,
       max_allowed_registered: 12
      },
    ]);
  });
};