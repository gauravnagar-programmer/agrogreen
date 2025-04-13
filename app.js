const express  = require('express');
const app= express();
const path = require('path')

app.set('view engine','ejs');
app.use(express.static(path.join(__dirname,"public")));

app.get('/',(req,res)=>{
  res.render('home')
});
app.get('/about',(req,res)=>{
  res.render('about')
});
app.get('/contact',(req,res)=>{
  res.render('contact')
});

app.listen(4000) 