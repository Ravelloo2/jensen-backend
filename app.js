const credentials = {secretUser:"user" , secretPassword:"password"}

const cors = require('cors')
const express = require('express')

const app = express()

app.use(cors())
app.get('/', (req, res) => {
    const enodedAuth = (req.headers.authorization || '')
    .split(' ')[1] || ''

    const [user, password] = Buffer.from(enodedAuth)
    console.log(user)
    console.log(password)
    
    toString().split(':')
    if(user === credentials.secretUser && password === credentials.secretPassword) {
        res.status(200).send({"STATUS":"SUCCESS"})
    } else {
        res.set('WWW-Authenticate', 'Basic realm = "Access to Index"')
        res.status(401).send("Unauthorized Access")

    }
})

app.listen(3000, () => {
    console.log('Listening on port 3000')
})