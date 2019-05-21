const fs = require('fs')

function replaceForm(schema) {
    const compoentPath = './src/app/survey/survey.component.html'
    const inputs = (schema.fields).map(
        inputMeta => {
            return `
            <div class="form-group">
                <label for="${inputMeta.name}">${inputMeta.label}</label>
                <input type="text" name="${inputMeta.name}" ngModel class="form-control" id="${inputMeta.name}">
            </div>`
        }
    )
    const html = `<form #f="ngForm">
                    ${inputs.join('\n')}
                    <button type="submit" class="btn btn-primary" (click)="submit(f.value)">Submit</button>
                  </form>
                <p>{{f.value | json}}</p>`
    console.log(html)
    fs.writeFileSync(compoentPath, html)
}

function loadSchema() {
    const schema = JSON.parse(fs.readFileSync('./schema.json', {encoding: 'utf8'}))
    console.log(schema)
    return schema
}

const schema = loadSchema()
replaceForm(schema)