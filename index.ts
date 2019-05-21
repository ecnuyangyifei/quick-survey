import * as express from "express";
import * as  bodyParser from 'body-parser'
import * as fs from 'fs'


function getSchemaName() {
    const schema = JSON.parse(fs.readFileSync('./schema.json', {encoding: 'utf8'}))
    return schema.name
}
const schemaName = getSchemaName()

function loadData() {
    const dataPath = `${schemaName}.json`
    if (fs.existsSync(dataPath)) {
        return JSON.parse(fs.readFileSync(dataPath, {encoding: 'utf8'}))
    } else {
        return []
    }
}

function saveData(data) {
    const dataPath = `${schemaName}.json`
    fs.writeFileSync(dataPath, JSON.stringify(data))    
}


const app = express() 
app.use(express.static('dist/quick-survey'))

app.use(bodyParser.json());
app.post('/submit', (req, res) => {
    console.log('submit is called', req.body)
    const dataSet = loadData()
    dataSet.push(req.body)
    saveData(dataSet)
    res.status(200)
        .end('success')
})

app.get('/load', (req, res) => {
    console.log('load is called')
    const dataSet = loadData()
    res.setHeader('Content-Type', 'application/json')
    res.status(200)
        .end(JSON.stringify(dataSet))
})

const port = process.env.port || 8081

app.listen(port, () => {
    console.log('qucik-survey started, listening', port)
})