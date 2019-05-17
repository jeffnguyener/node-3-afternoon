module.exports = {
    create: (req, res) => {
        const db = req.app.get('db')
        const {name, description, price, image_url} = req.body
        db.create_products({name, description, price, image_url}).then((products) => {
            res.status(200).send(products)
        })
        .catch(error => {
            if(error) throw(error);
        })
    },

    getOne: (req, res) => {
        const db = req.app.get('db')
        const {id} = req.params
        db.read_products_id(id).then((product) => {
            res.status(200).send(product)
        })
        .catch(error => {
            if(error) throw(error);
        })
    },

    getAll: (req, res) => {
        const db = req.app.get('db')
        db.read_products().then((products) => {
            res.status(200).send(products)
        })
    },

    update: (req, res) => {
        const db = req.app.get('db')
        const {}
        db.update_product().then((product) => {
            res.status(200).send(product)
        })
    },

    delete: (req, res) => {
        const db = req.app.get('db')
        db.delete_product().then((product) => {
            res.status(200).send(product)
        })
    }
}