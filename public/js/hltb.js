// eslint-disable-next-line no-unused-vars
class HLTB {
    constructor() {}

    async getGame(game) {
        // Start backend before this step is executed
        const gameResponse = await fetch(`http://localhost:4567/api/v1/games/findone/${game}`);

        const json = await gameResponse.json();

        return {
            json
        };
    }

    async getDetails(id) {
        const detailsResponse = await fetch(`http://localhost:4567/api/v1/games/${id}`);

        const json = await detailsResponse.json();

        return {
            json
        };
    }
}
