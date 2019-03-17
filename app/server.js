const express = require('express');
const app = express();
const port = 4567;
const routes = require('./routes');
const middleware = require('./middleware.js');

function logStartUpDetailsToConsole() {
    let routes = [];

    // Find what routes are supported
    app._router.stack.forEach((middleware) => {
        if (middleware.route) {
            // Routes registered directly on the app
            routes.push(middleware.route);
        } else if (middleware.name === "router") {
            // Routes added as router middleware
            middleware.handle.stack.forEach((handler) => {
                let route;

                route = handler.route;
                route && routes.push(route);
            });
        }
    });

    console.info(`Server is listening on port ${port}.`);
    console.info("Available routes are:");
    console.info(routes);
}

app.use(middleware.logIncomingToConsole);
app.use('', routes);
app.listen(port, logStartUpDetailsToConsole);

module.exports = app;
