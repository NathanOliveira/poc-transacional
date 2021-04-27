const controller = require('../controllers/TransactionAnswer');
module.exports = (app) => {

    app.post('/transactionalCell/setPhones', (req, resp) => {
        controller.getPhones(req, resp);
    });

    app.post('/transactionalCell/setProducts', (req, resp) => {
        controller.getProduct(req, resp);
    });

    app.post('/transactionalCell/user', (req, resp) => {
        controller.getUser(req, resp);
    });

    app.post('/transactionalCell/replace', (req, resp) => {
        controller.replace(req, resp);
    });

}