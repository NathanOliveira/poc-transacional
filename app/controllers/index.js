function Index(req, resp) {
    resp.status(200).send({
        "success": true,
        "statusCode": 200,
        "message": "Welcome to poc-transacional"
    });
}

module.exports = {
    Index
}