class basicController {
    get(req, res) {
        res.send('Hello World!');
    }
    post(req, res) {
        res.status(204).send();
    }
    put(req, res) {
        res.status(204).send();
    }
    delete(req, res) {
        res.status(204).send();
    }
}
module.exports = new basicController();
