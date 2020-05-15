const { formPage, showPage } = require('./controller');

module.exports = (app) => {
    app.get('/', formPage );
    app.get('/ufo', showPage )
}
