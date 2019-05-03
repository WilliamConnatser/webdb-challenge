
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('actions').del()
    .then(function () {
      // Inserts seed entries
      return knex('actions').insert([
        {
          description: "Cool action 1",
          notes: "Cool action is cool 1",
          complete: true,
          project_id: 1
        },
        {
          description: "Cool action 2",
          notes: "Cool action is cool 2",
          complete: true,
          project_id: 2
        },
        {
          description: "Cool action 3",
          notes: "Cool action is cool 3",
          complete: true,
          project_id: 3
        }
      ]);
    });
};
