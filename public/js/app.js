// eslint-disable-next-line no-undef
const hltb = new HLTB();
// eslint-disable-next-line no-undef
const ui = new UI();
// eslint-disable-next-line no-undef
const db = new DB();

const searchGame = document.getElementById('searchGame');
const yesButton = document.getElementById('yesButton');
const noButton = document.getElementById('noButton');

yesButton.addEventListener('click', () => {
    console.log('Yes button clicked');
    const data = {
        gameId: 2323323,
        name: 'test'
    };
    db.createRecord(data);
});

noButton.addEventListener('click', () => {
    console.log('No button clicked');
    ui.clearAll();
});

searchGame.addEventListener('focusout', (e) => {
    const gameTitle = e.target.value;

    if (gameTitle !== '') {
        console.log(gameTitle);
        hltb.getGame(gameTitle).then((data) => {
            console.log(data);
            if (data.json.message === 'Not Found') {
                //Take care of errors
            } else {
                //Show data
                console.log(data.json.data.name);
                ui.populate(data.json.data);
            }
        });
    } else {
        //Clear JSON Data
        ui.clearJson();
    }
});
