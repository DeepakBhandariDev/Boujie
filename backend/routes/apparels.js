const router = require('express').Router();
let Apparel = require('../models/apparel.model');


router.route('/').get((req,res) => {
    Apparel.find()
    .then(apparels => res.json(apparels))
    .catch(err => res.status(400).json('Error: '+ err));
})

router.route('/add').post((req,res) => {
    const username = req.body.username;
    const id = req.body.id;
    const description = req.body.description;
    const colors = req.body.colors;
    const sizes = req.body.username;
    const price = Number(req.body.price);
    const count = Number(req.body.count);
    const newApparel = new Apparel({username, id, description, colors, sizes, price, count});

    newApparel.save()
    .then(() => res.json('Apparel added.'))
    .catch(err => res.status(400).json('Error: '+ err));
})

router.route('/:id').get((req,res) => {
    Apparel.findById(req.params.id)
    .then(apparel => res.json(apparel))
    .catch(err => res.status(400).json('Error: '+ err));
})

router.route('/:id').delete((req,res) => {
    Apparel.findByIdAndDelete(req.params.id)
    .then(() => res.json('Apparel deleted'))
    .catch(err => res.status(400).json('Error: '+ err));
})

router.route('/update/:id').post((req,res) => {
    Apparel.findById(req.params.id)
    .then(apparel => {
    apparel.username = req.body.username;
    apparel.id = req.body.id;
    apparel.description = req.body.description;
    apparel.colors = req.body.colors;
    apparel.sizes = req.body.username;
    apparel.price = Number(req.body.price);
    apparel.count = Number(req.body.count);

    apparel.save()
    .then(() => res.json('Apparel updated.'))
    .catch(err => res.status(400).json('Error: '+ err));
    })
    .catch(err => res.status(400).json('Error: '+ err));
})

module.exports = router;