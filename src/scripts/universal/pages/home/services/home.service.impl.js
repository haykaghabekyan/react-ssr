export class HomeServiceImpl {
    static get(req, res) {
        res.send({
            items: [{
                id: 1,
                name: 'First item'
            }, {
                id: 2,
                name: 'Second item'
            }]
        });
    }
}
