exports.up = function (knex, Promise) {
    return knex.schema.createTable('projects', tbl => {
            tbl.increments();
            tbl.string('name', 128)
                .notNullable();
            tbl.string('description', 256)
                .notNullable();
            tbl.boolean('complete')
                .notNullable()
                .defaultTo(false);
        })
        .createTable('actions', tbl => {
            tbl.increments();
            tbl.string('description', 256)
                .notNullable();
            tbl.string('notes', 512)
                .notNullable();
            tbl.boolean('complete')
                .notNullable()
                .defaultTo(false);
            tbl.integer('project_id')
                .notNullable()
                .references('id')
                .inTable('projects')
                .onDelete('RESTRICT')
                .onUpdate('CASCADE');
        });
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTableIfExists('actions')
        .dropTableIfExists('projects');
};