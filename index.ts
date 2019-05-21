const  express = require('express')

const app = express()

app.use(express.static('dist/quick-survey'))

const port = process.env.port || 8081

app.listen(port, () => {
    console.log('qucik-survey started, listening', port)
})