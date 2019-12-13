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

// change the next line to map over the array and remove the "." from each pokemon
const cleanPokemon = pokemon;

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
  // change the next line to filter the array based on the user input
  const filteredPokemon = cleanPokemon;
  render(filteredPokemon);
});
