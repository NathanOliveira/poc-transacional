const controller = require('../controllers/index');

module.exports = function (app) {

    app.get('/',(req,resp) => {
        controller.Index(req,resp);
    })

}