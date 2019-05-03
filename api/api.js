const db = require('../data/dbConfig');

const addProject = (project) => {
    return db('projects')
        .insert(project, 'id')
        .then(id => {
            return db('projects')
                .where({
                    id
                });
        })
        .catch(err => {
            return err.message;
        });
}

const addAction = (action) => {
    return db('actions')
        .insert(action, 'id')
        .then(id => {
            return db('actions')
                .where({
                    id: id[0]
                });
        })
        .catch(err => {
            return err.message;
        });
}

const getProject = (id) => {
    return db('projects')
        .innerJoin('actions', 'actions.project_id', 'projects.id')
        .select({
            id: 'projects.id',
            name: 'projects.name',
            description: 'projects.description',
            completed: 'projects.complete',
            action_description: 'actions.description',
            action_notes: 'actions.notes',
            action_complete: 'actions.complete',
            action_project_id: 'actions.project_id'
            // actions: [
            //     db.raw('ARRAY_AGG(actions) as action')
            // ]

        })
        .where({
            'projects.id': id
        })
        .first()
        .catch(err => {
            return err.message;
        });
}

const getAction = (id) => {
    return db('actions')
        // .join('projects', 'projects.id', 'actions.project_id')
        .where({
            'actions.id': id
        })
        .first()
        .catch(err => {
            return err.message;
        });
}

module.exports = {
    addAction,
    addProject,
    getAction,
    getProject
}