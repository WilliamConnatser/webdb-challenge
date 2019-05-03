const db = require('../data/dbConfig');

const addProject = (project) => {
    return db('projects')
    .insert(project, 'id')
    .then(id => {
        return db('projects')
        .where({id});
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
        .where({id});
    })
    .catch(err => {
        return err.message;
    });
}

const getProject = (id) => {
    return db('projects')
    .join('actions', 'actions.project_id', 'projects.id')
    .where({'projects.id': id})
    .first()
    .catch(err => {
        return err.message;
    });
}

const getAction = (id) => {
    return db('actions')
    .join('projects', 'projects.id', 'actions.project_id')
    .where({'actions.id': id})
    .first()
    .catch(err => {
        return err.message;
    });
}