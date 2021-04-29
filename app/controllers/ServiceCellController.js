function usuarioIdentificado(req, resp) {

    let userProduct = {
        usuarioIdentificado: true,
        financiamentoVeiculo: true,
        financiamentoOutros: true,
        produtos: [{
                value: "CD",
                name: "Conta Digital"
            },
            {
                value: "CC",
                name: "Cartão de Crédito"
            },
            {
                value: "FIV",
                name: "Financiamento - Veiculos"
            },
            {
                value: "FIO",
                name: "Financiamento - Outros"
            }
        ],
        name: "Nathan Oliveira",
        id: 6722,
        birthdate: "1991-03-28",
        document: req.body.visibleContext.nuCpfCnpj,
        Rua: "Rua dos bugs",
        Bairo: "Bug Central",
        numero: "404"
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