const pokemon = [
  "bulbasaur.",
  "squirtle.",
  "charmander.",
  "chikorita.",
  "cyndaquil.",
  "totodile.",
  "torchic.",
  "mudkip.",
  "treecko.",
  "turtwig.",
  "chimchar.",
  "piplup.",
  "snivy.",
  "tepig.",
  "oshawott.",
  "chespin.",
  "fennekin.",
  "froakie.",
  "rowlet.",
  "litten.",
  "poplio.",
  "grookey.",
  "scorbunny.",
  "sobble.",
];

const cleanPokemon = map(p => p.slice(0, -1), pokemon);

const list = document.querySelector("#pokemon-list");
function render(pokeArray) {
  list.innerHTML = "";
  pokeArray.forEach(pokemon => {
    const li = document.createElement("li");
    li.textContent = pokemon;
    list.appendChild(li);
  });
}

render(cleanPokemon);

const input = document.querySelector("#poke-filter");
input.addEventListener("input", event => {
  const search = event.target.value;
  const filteredPokemon = filter(poke => poke.includes(search), cleanPokemon);
  render(filteredPokemon);
});
