

module.exports = {
    getHouse: (req, res) => {
        const dbInstance = req.app.get('db')

        dbInstance.get_houses().then((houses) => {
            res.status(200).send(houses)
        }).catch((err) => {
            res.status(500).send({errMessage: "Someting went wrong getting the houses from the database."});
            console.log(err)
        });
    },

    addHouse: (req, res) => {
        var { name, address, city, state, zip } = req.body
        const dbInstance = req.app.get('db')

        dbInstance.add_house([name, address, city, state, zip]).then((response) => {
            res.status(200).send('added')
        }).catch((err) => {
            console.log(err)
            res.status(500).send('Could not add new house');
        });
    },

    deleteHouse: (req, res) => {
        var { id } = req.params
        const dbInstance = req.app.get('db')

        dbInstance.delete_house([id]).then(() => {
            dbInstance.get_houses().then((houses) => {
                res.status(200).send(houses)})
        }).catch((err) => {
            res.status(409).send({errMessage: "For some reason house was not deleted."});
            console.log(err)
        })
    },

}