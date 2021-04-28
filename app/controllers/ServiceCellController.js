function userProduct(req, resp) {

    let userProduct = {
        usuarioIdentificado: true,
        financiamentoVeiculo: true,
        financiamentoOutros: true,
        produtos: [{
                codigo: "CD",
                descricao: "Conta Digital"
            },
            {
                codigo: "CC",
                descricao: "Cartão de Crédito"
            },
            {
                codigo: "FIV",
                descricao: "Financiamentos - Veiculos"
            },
            {
                codigo: "CC",
                descricao: "Financiamento - Outros"
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
    userProduct
}