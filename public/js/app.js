// eslint-disable-next-line no-undef
const hltb = new HLTB();
// eslint-disable-next-line no-undef
const ui = new UI();

const searchGame = document.getElementById('searchGame');

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
