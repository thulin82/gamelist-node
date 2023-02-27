/* eslint-disable no-unused-vars */
//Instead of using the HowLongToBeatService, use fetch to get the data from the website,
// using a POST to https://howlongtobeat.com/api/search
// @desc Get a game from title
exports.searchGame = async (req, res, next) => {
    await fetch('https://howlongtobeat.com/api/search', {
        method: 'POST',
        redirect: 'follow',
        headers: {
            'Content-Type': 'application/json',
            'referer': 'https://howlongtobeat.com/'
        },
        body: JSON.stringify({
            searchType: 'games',
            searchTerms: [req.params.name],
            searchPage: 1,
            size: 20,
            searchOptions: {
                games: {
                    userId: 0,
                    platform: "",
                    sortCategory: "popular",
                    rangeCategory: "main",
                    rangeTime: {
                        min: 0,
                        max: 0
                    },
                    gameplay: {
                        perspective: "",
                        flow: "",
                        genre: ""
                    },
                    modifier: ""
                },
                users: {
                    sortCategory: "postcount"
                },
                filter: "",
                sort: 0,
                randomizer: 0
            }
        })
    }).then(response => response.json())
        .then(result => res.status(200).json({ success: true, data: result }))
        .catch(error => console.log('error', error));
};
