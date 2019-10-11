module.exports = {
    getComments: (req, res) => {
        const db = req.app.get('db')

        db.get_comment()
        .then(dbResponse => {
            res.status(200).send(dbResponse)
        })
        .catch(err => {
            res.status(500).send(err) 
        })
    }
}