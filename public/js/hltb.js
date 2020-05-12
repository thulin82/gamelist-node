// eslint-disable-next-line no-unused-vars
class HLTB {
    constructor() {
    }

    async getGame(game) {
        // Start backend before this step is executed
        const gameResponse = await fetch(`http://localhost:4567/one/${game}`);

        const json = await gameResponse.json();

        return {
            json
        };
    }
}
