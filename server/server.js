var Express = require('express');
var path = require('path');

var app = Express();

app.use(Express.static(path.join( __dirname, '../dist')));
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, '../dist'));

app.get('*', (req, res)=>{
  res.render('index');
})

app.listen(8080, ()=>{
  console.log('listening on port 8080');
})

