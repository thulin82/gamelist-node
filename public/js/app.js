// eslint-disable-next-line no-undef
const hltb = new HLTB();
// eslint-disable-next-line no-undef
const ui = new UI();
// eslint-disable-next-line no-undef
const db = new DB();

var globalData;

const searchGame = document.getElementById('searchGame');
const yesButton = document.getElementById('yesButton');
const noButton = document.getElementById('noButton');

yesButton.addEventListener('click', () => {
    const data = {
        gameId: globalData.id,
        name: globalData.name,
        description: globalData.description,
        image: 'https://howlongtobeat.com' + globalData.imageUrl,
        gameTimes: {
            gameplayMain: globalData.gameplayMain,
            gameplayMainExtra: globalData.gameplayMainExtra,
            gameplayCompletionist: globalData.gameplayCompletionist}
    };
    db.createRecord(data);
    ui.userPopup('Data added to the DB');
    ui.clearAll();
});

noButton.addEventListener('click', () => {
    ui.clearAll();
});

searchGame.addEventListener('focusout', (e) => {
    const gameTitle = e.target.value;

    if (gameTitle !== '') {
        hltb.getGame(gameTitle).then((data) => {
            console.log(data);
            if (data.json.message === 'Not Found') {
                //Take care of errors
                console.warn('No data found');
            } else {
                //Show data
                ui.populate(data.json.data);
                globalData = data.json.data;
            }
        });
    } else {
        //Clear JSON Data
        ui.clearJson();
    }
});
