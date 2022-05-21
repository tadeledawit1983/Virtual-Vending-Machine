const router = require('express').Router();
let items = require('../model/item.model')

router.route('/').get((req, res) => {
    items.find()
        .then(items => res.json(items))
        .catch(err => res.status(400).json('error: ' + err))
})
router.route('/add').post((req, res) => {
    const name = req.body.name
    const description = req.body.description
    const price = Number(req.body.price)
    const quantity = Number(req.body.quantity)
    const product_img = req.body.product_img

    const newItems = new items({ name, description, price, quantity, product_img });
    newItems.save()
        .then(() => res.json('Item Added'))
        .catch(err => res.status(400).json('error: ' + err))
})

router.route('/:id').get((req, res) => {
    items.findById(req.params.id)
        .then((item) => res.json(item))
        .catch(err => res.status(400).json('error: ' + err))
})
router.route('/:id').delete((req, res) => {
    items.findByIdAndDelete(req.params.id)
        .then(() => res.json('item removed'))
        .catch(err => res.status(400).json('error: ' + err))
})
router.route('/update/:id').post((req, res) => {
    items.findById(req.params.id)
        .then((item) => {
            item.name = req.body.name;
            item.description = req.body.description;
            item.price = req.body.price;
            item.quantity = req.body.quantity;
            item.product_img = req.body.product_img;
            item.save()
                .then(() => res.json('item '))
                .catch(err => res.status(400).json('error: ' + err))
        })
        .catch(err => res.status(400).json('error: ' + err))
})

module.exports = router

