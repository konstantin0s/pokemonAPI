const express = require('express');
const hbs     = require('hbs');
const app     = express();
const path    = require('path');

// const beers = require('./beers.json');

app.set('view engine', 'hbs');
app.set('views', __dirname + '/views');
app.use(express.static(path.join(__dirname, 'public')));



app.get('/', (req, res, next) => {
  res.render('index');
});

// app.get('/beers', (req, res, next) => {
//   punkAPI.getBeers()
//   .then(beers => {
//     console.log(beers[0])
//     res.render('beers', {beers})
//   })
//   .catch(err => {
//     console.log(err)
//   //  res.render('page500')
//   })
// });


app.get('/pokemons', (req, res, next) => {
  res.render('pokemons',
  //  {pokemons}
   );
});

hbs.registerPartials(__dirname + '/views/partials');

app.get('/randomPokemon', (req, res, next) => {
  res.render('randomPokemon', {
    // pokemon: pokemons[0];
  })
});

/*
app.get('/randomBeer', (req,res) => {
  punkAPI.getRandom()
  .then(beers => {
    res.render('randomBeer', {
      beer: beers[0]
    })
  })
})
*/
app.listen(3000, ()=> {
  console.log("listening");
});