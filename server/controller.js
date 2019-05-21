module.exports = {
    create: (req, res) => {
        const db = req.app.get('db')
        const { name, description, price, image_url } = req.body
        db.create_products({ name, description, price, image_url }).then((products) => {
            res.status(200).send(products)
        })
            .catch(error => {
                if (error) throw (error);
            })
    },

    getOne: (req, res) => {
        const db = req.app.get('db')
        const { id } = req.params
        db.read_product_id(id).then((product) => {
            res.status(200).send(product)
        })
            .catch(error => {
                if (error) throw (error);
            })
    },

    getAll: (req, res) => {
        const db = req.app.get('db')
        db.read_products().then((products) => {
            res.status(200).send(products)
        })
            .catch(error => {
                if (error) throw (error);
            })
    },

    update: (req, res) => {
        const db = req.app.get('db')
        const { params, query } = req
        db.update_product(params.id, query.desc).then((product) => {
            res.status(200).send(product)
        })
            .catch(error => {
                if (error) throw (error);
            })
    },

    delete: (req, res) => {
        const db = req.app.get('db')
        const { id } = req.params
        db.delete_product().then((product) => {
            res.status(200).send(product)
        })
            .catch(error => {
                if (error) throw (error);
            })
    }
}