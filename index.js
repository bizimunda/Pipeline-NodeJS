const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.send('Hello World!, Here is Node/Express...'))

 function add (a,b)
{
    return a+b;
}

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

module.exports=add;