controller = require('../controllers/ServiceCellController');
module.exports = function (app) {

    app.post('/servicecell',(req,resp) => {
        controller.ServiceCell(req,resp);
    });

    app.post('/ServiceCell/userProduct',(req,resp) => {
        controller.userProduct(req,resp);
    })

}