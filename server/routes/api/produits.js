const express = require('express')
const router = express.Router()

const Produits = require('../../models/Produits')

router.get('/test', (req, res) => res.send('Produits route testing!'))

router.get('/', (req, res) => {
    Produits.find()
        .then(produit => res.json(produit))
        .catch(err => res.status(404).json({ error: 'No Product found' }))
})

router.get('/:id', (req, res) => {
    Produits.findById(req.params.id)
        .then(produit => res.json(produit))
        .catch(err => res.status(404).json({ error: 'No Product found' }))
})

router.post('/', (req, res) => {

})

router.put('/:id', (req, res) => {

})

router.delete('/:id', (req, res) => {

})

module.exports = router