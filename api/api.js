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
    let project = db('projects').where({id});
    let actions = db('actions').where({project_id: id})

    return Promise.all([project, actions]).then(results => {
      const [project, actions] = results;
      return {...project, actions: [...actions]};
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