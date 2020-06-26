// eslint-disable-next-line no-unused-vars
class DB {
    constructor() {}

    async createRecord(data) {
        const url = 'http://localhost:4567/api/v1/db';
        const param = {
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data),
            method: 'POST'
        };
        await fetch(url, param);
    }
}
