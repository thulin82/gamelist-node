const csv = require('csvtojson');
/* eslint-disable no-unused-vars */
exports.parseCsv = async (req, res, next) => {
    (async () => {
        var jsons =  await csv().fromFile(req.file.path);
        res.status(200).json({ success: true, data: jsons });
    })()
        .catch((err) => {
            console.log(err);
        });
};
