const express = require('express');
const router = express.Router();
const axios = require('axios');
require('dotenv').config();

var apiUrl = "https://pokeapi.co/api/v2/pokemon/";

router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/pokemons', (req, res, next) => {
     axios.get(`${apiUrl}`).then(function (response) {

    var pokemons = response.data;
    res.json(pokemons);
    console.log(pokemons)
    // res.render('pokemons', {pokemons})
  })
});



router.get('/randomPokemon', (req, res, next) => {
      apiUrl.getRandom()
  .then(pokemons => {
    res.render('randomPokemon', {
      pokemon: pokemons[0]
    })
  })
//   res.render('randomPokemon', {
//     // pokemon: pokemons[0];
//   })
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

module.exports = router;