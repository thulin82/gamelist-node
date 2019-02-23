const express = require('express')
const hltb = require('howlongtobeat');
const hltbService = new hltb.HowLongToBeatService();
const app = express()
const port = 4567

app.get('/', (req, res) => res.send('Hello World!'))

app.get('/search/:name', (req, res) => {
    hltbService.search(req.params.name).then(result => {
        res.json(result);
    });
});
app.get('/id/:nr', (req, res) => {
    hltbService.detail(req.params.nr).then(result => {
        res.json(result);
    });

});
app.listen(port, () => console.log(`Example app listening on port ${port}!`))