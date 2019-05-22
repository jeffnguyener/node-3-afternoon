module.exports = {
    create: (req, res) => {
        const dbInstance = req.app.get('db')
        const { name, description, price, image_url } = req.body

        dbInstance.create_product([ name, description, price, image_url ]).then((products) => {
            res.status(200).send(products)
        })
            .catch(err => {
                res.status(500).send({ errorMessage: "Error" });
                console.log(err);
            })
    },

    getOne: (req, res) => {
        const dbInstance = req.app.get('db')
        const { id } = req.params

        dbInstance.read_product_id(id).then(product => {
            res.status(200).send(product)
        })
            .catch(err => {
                res.status(500).send({ errorMessage: "Error" });
                console.log(err);
            })
    },

    getAll: (req, res) => {
        const dbInstance = req.app.get('db')

        dbInstance.read_products().then(product =>
            res.status(200).send(product)
        )
            .catch(err => {
                res.status(500).send({ errorMessage: "Error" });
                console.log(err);
            })
    },

    update: (req, res) => {
        const dbInstance = req.app.get('db')
        const { params, query } = req

        dbInstance.update_product(params.id, query.desc).then((product) => {
            res.status(200).send(product)
        })
            .catch(err => {
                res.status(500).send({ errorMessage: "Error" });
                console.log(err);
            })
    },

    delete: (req, res) => {
        const dbInstance = req.app.get('db')
        const { id } = req.params
        dbInstance.delete_product(id).then((product) => {
            res.status(200).send(product)
        })
            .catch(err => {
                res.status(500).send({ errorMessage: "Error" });
                console.log(err);
            })
    }
}