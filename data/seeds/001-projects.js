exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('projects').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([{
        name: "Cool Project 1",
        description: "Cool project is cool 1",
        complete: true
      }, {
        name: "Cool Project 2",
        description: "Cool project is cool 2",
        complete: false
      }, {
        name: "Cool Project 3",
        description: "Cool project is cool 3",
        complete: true
      }]);
    });
};