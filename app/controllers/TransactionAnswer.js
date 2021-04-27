function getUser(req, resp) {

    var answer = req.body.answer;
    console.log(req.body)

    var user = {
        "name": "Nathan Oliveira",
        "id": 6722,
        "birthdate": "1991-03-28",
        "document": "87237236722"
    };

    var response = {
        openContext: req.body.openContext,
        visibleContext: {
            ...req.body.visibleContext,
            ...user
        },
        hiddenContext: {
            ...req.body.hiddenContext,
            ...user
        },
        answer
    }

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

function getProduct(req, resp) {

    var answer = req.body.answer;

    var buttons = [{
            name: "Conta Corrente",
            value: "C:123456"
        },
        {
            name: "Poupança",
            value: "C:123456"
        },
        {
            name: "Carteira de investimentos",
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
    getUser
};