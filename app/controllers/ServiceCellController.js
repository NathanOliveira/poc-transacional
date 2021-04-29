function usuarioIdentificado(req, resp) {

    let userProduct = {
        usuarioIdentificado: true,
        financiamentoVeiculo: true,
        financiamentoOutros: true,
        produtos: [{
                name: "(11) 1234-5678",
                value: "C:123456"
            },
            {
                name: "(11) 1111-1111",
                value: "C:123456"
            },
            {
                name: "(11) 2222-2222",
                value: "C:123456"
            }
        ]
    };

    var response = {
        openContext: req.body.openContext,
        visibleContext: req.body.visibleContext,
        hiddenContext: {
            ...req.body.hiddenContext,
            ...userProduct
        },
        option: userProduct.usuarioIdentificado.toString().toUpperCase()
    }

    console.log("request: ", req.body)
    console.log("response: ", response)

    resp.status(200).send(response);
}

function financiamentoVeiculo(req, resp) {
    let body = req.body;

    var response = {
        openContext: req.body.openContext,
        visibleContext: req.body.visibleContext,
        hiddenContext: req.body.hiddenContext,
        option: body.hiddenContext.financiamentoVeiculo.toString().toUpperCase()
    }

    resp.status(200).send(response);

}


function ServiceCell(req, resp) {
    var option = req.query.option;
    var response = {
        openContext: req.body.openContext,
        visibleContext: req.body.visibleContext,
        hiddenContext: req.body.hiddenContext,
        option
    }

    resp.status(200).send(response);
}

module.exports = {
    ServiceCell,
    usuarioIdentificado,
    financiamentoVeiculo
}