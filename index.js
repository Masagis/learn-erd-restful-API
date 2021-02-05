const express = require('express')
let pemilih = require('./db/pemilih.json')
let calon = require('./db/kandidat.json')
let hasil = require('./db/hasil.json')
const app = express()

app.use(express.json())
app.use(express.urlencoded({
    extended: true
}))

app.get('/api/v1/pemilih', (req, res) => {
    res.status(200).json(pemilih)
})

app.get('/api/v1/pemilih/:id', (req, res) => {
    const terpilih = pemilih.find(i => i.id == +req.params.id)
    res.status(200).json(terpilih)
})

app.post('/api/v1/pemilih', (req, res) => {
    console.log(req.body)
    const {
        nim,
        nama_mhs,
        prodi,
        vote_who,
        keterangan
    } = req.body


    const id = pemilih[pemilih.length - 1].id + 1
    const terpilih = {
        id,
        nim,
        nama_mhs,
        prodi,
        vote_who,
        keterangan
    }

    pemilih.push(terpilih)
    res.status(201).json(pemilih)
})


app.get('/api/v1/calon', (req, res) => {
    res.status(200).json(calon)
})

app.get('/api/v1/calon/:id', (req, res) => {
    const kandidat = calon.find(i => i.id == +req.params.id)
    res.status(200).json(kandidat)
})

app.get('/api/v1/hasil', (req, res) => {
    res.status(200).json(hasil)
})

app.get('/api/v1/hasil/:id', (req, res) => {
    const result = hasil.find(i => i.id == +req.params.id)
    res.status(200).json(result)
})

app.listen(3000, () => {
    console.log('Server ready')
})