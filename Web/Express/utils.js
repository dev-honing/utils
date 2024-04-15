/**
 * @function Route
 * @param {string} app - Express app
 * @param {string} method - HTTP method
 * @param {string} path - URL path
 * @param {string} handler - Express request handler
 */
function Route(app, method, path, handler) {
  app[method](path, (req, res) => {
    handler(req, res);
  });
}

module.exports = {
  Route,
};
