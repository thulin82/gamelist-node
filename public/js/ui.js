// eslint-disable-next-line no-unused-vars
class UI {
    constructor() {
        this.json = document.getElementById('jsonData');
        this.buttons = document.getElementById('buttons');
    }

    populate(json) {
        this.json.innerHTML = JSON.stringify(json, null, 4);
        this.buttons.innerHTML = `
        <div class="row">
            <div class="col-md-6 mx-auto text-center bg-light">
                <h3>Save to db?</h3>
                <button type="button" id="yesButton" class="btn btn-success m-2">
                YES</button>
                <button type="button" id="noButton" class="btn btn-danger m-2">
                NO</button>
            </div>
        </div>
        `;
    }

    clearJson() {
        this.json.innerHTML = '';
        this.buttons.innerHTML = '';
    }
}
