'use strict';

module.exports.register = function (server, options, next) {
    const api = server.select('api');
    const view = server.select('view');
    const team = require('./model/team');

    api.route(
        require('./api/route')
    );

    view.route(
        require('./view/route')
    );

    server.expose('Team.create', team);

    next();
};

module.exports.register.attributes = {
    pkg: {
        name: 'team',
        version: '0.1.0'
    }
};