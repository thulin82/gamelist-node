// eslint-disable-next-line no-unused-vars
class UI {
    constructor() {
        this.json = document.getElementById('jsonData');
        this.buttons = document.getElementById('buttons');
        this.searchGame = document.getElementById('searchGame');
    }

    populate(json) {
        this.json.innerHTML = JSON.stringify(json, null, 4);
        this.buttons.style.display = 'block';
    }

    clearJson() {
        this.json.innerHTML = '';
        this.buttons.style.display = 'none';
    }

    clearAll() {
        this.json.innerHTML = '';
        this.buttons.style.display = 'none';
        this.searchGame.value = '';
    }

    //Add method for informing user that the information was added to the db
    userPopup(msg) {
        console.info(msg);
    }
}
