const express = require('express')
const app = express()
const router = express.Router()
const cors = require('cors')

app.use(cors())

router.route('/news')
    .get((req, res) => {
        res.json([{
                id: 1,
                title: "noticia 1",
                content: "lo que sea 1"
            },
            {
                id: 2,
                title: "noticia 2",
                content: "lo que sea 2"
            }
        ])
    })
    .post((req, res) => {

    })

module.exports = router