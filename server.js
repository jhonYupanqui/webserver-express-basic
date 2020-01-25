const express = require('express')
const app = express()

const hbs = require('hbs');

require('./hbs/helpers')

//Config Heroku for Node my App
  const port = process.env.PORT || 3000
//END Config
 
app.use( express.static( __dirname + '/public'));
   
//Express HBS engine
hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');

 
app.get('/', function (req, res) {
   
  res.render('home')

})

app.get('/about', (req,res) => {
  res.render('about', {
    nombre:"Jhon"
  })
})
 
app.listen(port, () => {
  console.log(`Escuchando en el puerto ${port}`)
})