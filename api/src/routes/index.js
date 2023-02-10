const { Router } = require('express');
const typesRoute = require('./types');         //importando las rutas
const pokemonsRoute = require('./pokemons'); 

const router = Router();

router.use("/pokemons", pokemonsRoute);   //rutas de pokemons
router.use("/types", typesRoute);    //rutas de types

module.exports = router;