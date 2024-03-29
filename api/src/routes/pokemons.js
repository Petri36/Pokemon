const { Router } = require("express");
const {
  getAllPoke,
  getPokeByName,
  getPokeById,
  postPokedb,
} = require("../controllers/pokemonController");

const router = Router();

//---ruta a pokemons y pokemons/?name---//
router.get("/", async (req, res) => {
  try {
    const { name } = req.query;
    if (!name) {
      return res.status(200).send(await getAllPoke());
    } else {
      const pokeFoundName = await getPokeByName(name);
      if (pokeFoundName) {
        return res.status(200).json(pokeFoundName);
      }
    }
  } catch (error) {
    return res.status(404).send("Pokemon not found");
  }
});

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    console.log(id);
    const pokeFoundId = await getPokeById(id);
    if (pokeFoundId) return res.status(200).json(pokeFoundId);
  } catch (error) {
    return res.status(404).send("Pokemon not found");
  }
});

router.post("/", async (req, res) => {
  try {
    const pokeData = req.body;
    await postPokedb(pokeData);
    return res.status(200).send("Pokemon creado con exito");
  } catch (error) {
    res.status(400).send("Fallo al crear el pokemon");
  }
});

module.exports = router;