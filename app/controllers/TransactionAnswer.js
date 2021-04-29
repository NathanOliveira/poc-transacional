function getProduct(req, resp) {
    let answerText = req.body.answer.content.content;
    let answer = req.body.answer;

    for (let parameter in req.body.hiddenContext) {

        switch (parameter) {
            case 'produtos':
                let buttons = req.body.hiddenContext.produtos.map(element => {
                    return {
                        "name": element.descricao,
                        "value": element.codigo
                    }
                });
                buttons.push(...req.body.answer.content.buttons);
                answer.content.buttons = buttons
                break;
        }
    }

    answer.content.content = answerText;

    var response = {
        openContext: req.body.openContext,
        visibleContext: req.body.visibleContext,
        hiddenContext: req.body.hiddenContext,
        answer
    }

    resp.status(200).send(response);

}

function getDetails(req, resp) {
    let answerText = req.body.answer.content.content;
    let answer = req.body.answer;

    for (let parameter in req.body.hiddenContext) {
        answer.content.content = answerText.replace(`__${parameter}__`, req.body.hiddenContext[parameter]);
    }

    var response = {
        openContext: req.body.openContext,
        visibleContext: req.body.visibleContext,
        hiddenContext: req.body.hiddenContext,
        answer
    }

    resp.status(200).send(response);
}

function getBoleto(req, resp) {
    var answer = req.body.answer;

    let detalheBoleto = {
        contratosResumoFinancVeiculo: [{
            numeroContratoMask: "120470002****",
            sequenciaContrato: 3,
            placaCarroMask: "GIN-3***",
            modeloCarro: "HB20X PREMIUM(BlueMedia e Couro) 1.6 16V AT 4P (AG) Complet - HYUNDAI",
            codigoStatusFinanciamento: 1,
            statusFinanciamento: "EM ABERTO",
            statusFinanciamentoContrato: 1,
            parcelaResumo: {
                numeroParcela: 2,
                codigoStatusParcela: 4,
                statusParcela: "Em dia",
                dataVencimentoParcela: "2021-04-15",
                valorParcela: 1044.50,
                linhaDigitavel: "65590.00002 00400.500005 01042.041002 4 85270000104277"
            }
        }]
    }

    var response = {
        openContext: req.body.openContext,
        visibleContext: req.body.visibleContext,
        hiddenContext: {
            ...req.body.hiddenContext,
            ...detalheBoleto
        },
        answer
    }

    console.log("request: ", req.body)
    console.log("response: ", response)

    resp.status(200).send(response);
}

function getAddress(req, resp) {

    var answer = req.body.answer;

    var address = {
        "Rua": "Rua dos bugs",
        "id": 6722,
        "Bairo": "Bug Central",
        "numero": "404"
    };

    var response = {
        openContext: req.body.openContext,
        visibleContext: {
            ...req.body.visibleContext,
            ...address
        },
        hiddenContext: {
            ...req.body.hiddenContext,
            ...address
        },
        answer
    }

    console.log("request: ", req.body)
    console.log("response: ", response)

    resp.status(200).send(response);
}

function getUser(req, resp) {

    var answer = req.body.answer;

    var user = {
        "name": "Nathan Oliveira",
        "id": 6722,
        "birthdate": "1991-03-28",
        "document": "87237236722",
        "Rua": "Rua dos bugs",
        "Bairo": "Bug Central",
        "numero": "404"
    };

    var response = {
        openContext: req.body.openContext,
        visibleContext: req.body.visibleContext,
        hiddenContext: {
            ...req.body.hiddenContext,
            ...user
        },
        answer
    }

    console.log("request: ", req.body)
    console.log("response: ", response)

    resp.status(200).send(response);
}

function getPhones(req, resp) {

    var answer = req.body.answer;

    var buttons = [{
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
    answer.content.buttons = buttons;

    var response = {
        openContext: req.body.openContext,
        visibleContext: req.body.visibleContext,
        hiddenContext: req.body.hiddenContext,
        answer
    }

    resp.status(200).send(response);
}


function replace(req, resp) {
    var answerText = req.body.answer.content.content;
    for (var parameter in req.query) {
        answerText = answerText.replace(`__${parameter}__`, req.query[parameter]);
    }
    var answer = req.body.answer;
    answer.content.content = answerText;
    var response = {
        openContext: req.body.openContext,
        visibleContext: req.body.visibleContext,
        hiddenContext: req.body.hiddenContext,
        answer
    }
    resp.status(200).send(response);
}

module.exports = {
    getPhones,
    getProduct,
    replace,
    getUser,
    getAddress,
    getBoleto,
    getDetails
};