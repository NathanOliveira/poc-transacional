const controller = require('../controllers/ServiceCellController');
module.exports = function (app) {

    app.post('/servicecell', (req, resp) => {
        controller.ServiceCell(req, resp);
    });

    app.post('/ServiceCell/usuarioIdentificado', (req, resp) => {
        controller.usuarioIdentificado(req, resp);
    });

    app.post('/ServiceCell/financiamentoVeiculo', (req, resp) => {
        controller.financiamentoVeiculo(req, resp);
    })

}