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
    ServiceCell
}