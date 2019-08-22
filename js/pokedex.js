var api_key = "https://pokeapi.co/api/v2/pokemon/";

//Type Image Sources
var bug_type = "https://vignette.wikia.nocookie.net/pokemon/images/6/64/Type_Bug.gif/revision/latest?cb=20150711192341";
var dark_type = "https://vignette.wikia.nocookie.net/pokemon/images/0/0d/Type_Dark.gif/revision/latest?cb=20141023234901";
var dragon_type = "https://vignette.wikia.nocookie.net/pokemon/images/2/26/Type_Dragon.gif/revision/latest?cb=20141023234902";
var electric_type = "https://vignette.wikia.nocookie.net/pokemon/images/a/aa/Type_Electric.gif/revision/latest?cb=20141023234902";
var fairy_type = "https://vignette.wikia.nocookie.net/pokemon/images/7/74/Type_Fairy.gif/revision/latest?cb=20141023234903";
var fighting_type = "https://vignette.wikia.nocookie.net/pokemon/images/6/6b/Type_Fighting.gif/revision/latest?cb=20141023234903";
var fire_type = "https://vignette.wikia.nocookie.net/pokemon/images/4/4d/Type_Fire.gif/revision/latest?cb=20141023234903";
var flying_type = "https://vignette.wikia.nocookie.net/pokemon/images/4/4b/Type_Flying.gif/revision/latest?cb=20141023234904";
var ghost_type = "https://vignette.wikia.nocookie.net/pokemon/images/f/f2/Type_Ghost.gif/revision/latest?cb=20141023234905";
var grass_type = "https://vignette.wikia.nocookie.net/pokemon/images/4/46/Type_Grass.gif/revision/latest?cb=20141023234906";
var ground_type = "https://vignette.wikia.nocookie.net/pokemon/images/1/1d/Type_Ground.gif/revision/latest?cb=20141023234906";
var ice_type = "https://vignette.wikia.nocookie.net/pokemon/images/8/84/Type_Ice.gif/revision/latest?cb=20141023235046";
var normal_type = "https://vignette.wikia.nocookie.net/pokemon/images/6/61/Type_Normal.gif/revision/latest?cb=20141023235047";
var poison_type = "https://vignette.wikia.nocookie.net/pokemon/images/8/82/Type_Poison.gif/revision/latest?cb=20141023235047";
var psychic_type = "https://vignette.wikia.nocookie.net/pokemon/images/6/65/Type_Psychic.gif/revision/latest?cb=20141023235048";
var rock_type = "https://vignette.wikia.nocookie.net/pokemon/images/b/b3/Type_Rock.gif/revision/latest?cb=20141023235048";
var steel_type = "https://vignette.wikia.nocookie.net/pokemon/images/a/ab/Type_Steel.gif/revision/latest?cb=20141023235048";
var water_type = "https://vignette.wikia.nocookie.net/pokemon/images/e/ed/Type_Water.gif/revision/latest?cb=20180304082247";

var pokemonTypes = ["bug", "dark", "dragon", "electric", "fairy", "fighting", "fire", "flying", "ghost", "grass",
"ground", "ice", "normal", "poison", "psychic", "rock", "steel", "water"];

let mon_img = document.getElementById("mon-pic");
let type_img_1 = document.getElementById("type-img-1");
let type_img_2 = document.getElementById("type-img-2");

let name = document.querySelector(".name");
let summary = document.querySelector(".summary");

let type = document.querySelector(".type");
let speed = document.querySelector(".Speed");

let special_defense = document.querySelector(".spec-def");
let special_attack = document.querySelector(".spec-attack");
let defense = document.querySelector(".defense");
let attack = document.querySelector(".attack");
let hp = document.querySelector(".HP");
var index = Math.floor(Math.random()*806+1);

var i = index;

var pokemon_index = api_key + index;
fetch(pokemon_index)
  .then(response =>{
    return response.json();
  })

  .then(data => {

    console.log(data);

    name.textContent = data.name[0].toUpperCase() + data.name.slice(1);
    mon_img.src=data.sprites.front_default;

    if(data.types.length==1){
      type_img_1.src=typeLinker(searchIndex(data.types[0].type.name, pokemonTypes));
    }
    else if (data.types.length==2) {
      type_img_1.src=typeLinker(searchIndex(data.types[0].type.name, pokemonTypes));
      type_img_2.src=typeLinker(searchIndex(data.types[1].type.name, pokemonTypes));
    }

    speed.textContent= "Speed: " +data.stats[0].base_stat;
    special_defense.textContent = "Special Defense: "+data.stats[1].base_stat;
    special_attack.textContent="Special Attack: "+data.stats[2].base_stat;
    defense.textContent ="Defense: "+data.stats[3].base_stat;
    attack.textContent ="Attack: "+data.stats[4].base_stat;
    hp.textContent ="HP: "+data.stats[5].base_stat;


})


function previous(){
  i--;
  if(i==0){
    alert("You cannot go back any further.");
    i=1;
  }
  pokemon_index = api_key + i;


  fetch(pokemon_index)
    .then(response =>{
      return response.json();
    })

    .then(data => {

      console.log(data);

      name.textContent = data.name[0].toUpperCase() + data.name.slice(1);
      mon_img.src=data.sprites.front_default;

      if(data.types.length==1){
        type_img_1.src=typeLinker(searchIndex(data.types[0].type.name, pokemonTypes));
        type_img_2.src = "";
      }
      else if (data.types.length==2) {
        type_img_1.src=typeLinker(searchIndex(data.types[0].type.name, pokemonTypes));
        type_img_2.src=typeLinker(searchIndex(data.types[1].type.name, pokemonTypes));
      }


      speed.textContent= "Speed: " +data.stats[0].base_stat;
      special_defense.textContent = "Special Defense: "+data.stats[1].base_stat;
      special_attack.textContent="Special Attack: "+data.stats[2].base_stat;
      defense.textContent ="Defense: "+data.stats[3].base_stat;
      attack.textContent ="Attack: "+data.stats[4].base_stat;
      hp.textContent ="HP: "+data.stats[5].base_stat;


  })
}
function next(){
  i++;
  if(i==808){
    alert("You cannot go any further");
    i=807;
  }
  pokemon_index= api_key+i;
  fetch(pokemon_index)
    .then(response =>{
      return response.json();
    })

    .then(data => {

      console.log(data);

      name.textContent = data.name[0].toUpperCase() + data.name.slice(1);
      mon_img.src=data.sprites.front_default;

      if(data.types.length==1){
        type_img_1.src=typeLinker(searchIndex(data.types[0].type.name, pokemonTypes));
        type_img_2.src = "";

      }
      else if (data.types.length==2) {
        type_img_1.src=typeLinker(searchIndex(data.types[0].type.name, pokemonTypes));
        type_img_2.src=typeLinker(searchIndex(data.types[1].type.name, pokemonTypes));
      }


      speed.textContent= "Speed: " +data.stats[0].base_stat;
      special_defense.textContent = "Special Defense: "+data.stats[1].base_stat;
      special_attack.textContent="Special Attack: "+data.stats[2].base_stat;
      defense.textContent ="Defense: "+data.stats[3].base_stat;
      attack.textContent ="Attack: "+data.stats[4].base_stat;
      hp.textContent ="HP: "+data.stats[5].base_stat;


  })

}

function search(){
  var searchResult = document.getElementById("search").value.toLowerCase();
  pokemon_index = api_key+searchResult;

  fetch(pokemon_index)
    .then(response =>{
      return response.json();
    })

    .then(data => {

      console.log(data);

      name.textContent = data.name[0].toUpperCase() + data.name.slice(1);
      mon_img.src=data.sprites.front_default;

      if(data.types.length==1){
        type_img_1.src=typeLinker(searchIndex(data.types[0].type.name, pokemonTypes));
        type_img_2.src = "";

      }
      else if (data.types.length==2) {
        type_img_1.src=typeLinker(searchIndex(data.types[0].type.name, pokemonTypes));
        type_img_2.src=typeLinker(searchIndex(data.types[1].type.name, pokemonTypes));
      }
       i = data.id;

      speed.textContent= "Speed: " +data.stats[0].base_stat;
      special_defense.textContent = "Special Defense: "+data.stats[1].base_stat;
      special_attack.textContent="Special Attack: "+data.stats[2].base_stat;
      defense.textContent ="Defense: "+data.stats[3].base_stat;
      attack.textContent ="Attack: "+data.stats[4].base_stat;
      hp.textContent ="HP: "+data.stats[5].base_stat;


  })

}

function searchIndex(type, typeArray){
  for (var i =0; i<typeArray.length; i++){
    if(typeArray[i]==type){
      return i;
    }
  }
  return -1;
}
function typeLinker(i){
  /* for reference  [""bug", "dark", "dragon", "electric", "fairy", "fighting", "fire",
  "flying", "ghost", "grass",
  "ground", "ice", "normal", "poison", "psychic", "rock", "steel", "water"];*/

  switch (i) {
    case 0: return bug_type;
    case 1: return dark_type;
    case 2: return dragon_type;
    case 3: return electric_type;
    case 4: return fairy_type;
    case 5: return fighting_type;
    case 6: return fire_type;
    case 7: return flying_type;
    case 8: return ghost_type;
    case 9: return grass_type;
    case 10: return ground_type;
    case 11:  return ice_type;
    case 12: return normal_type;
    case 13: return poison_type;
    case 14: return psychic_type;
    case 15: return rock_type;
    case 16: return steel_type;
    case 17: return water_type;
    default: return -1;

  }

}
