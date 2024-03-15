import React, { useState, useEffect } from "react";
import "../styles/PokeList.css";
import PokeCard from "./PokeCard";

function PokeList() {
  const [Pkmn, setPkmn] = useState([]);

  useEffect( () => {
    const getData = async () => {
      for (let i = 1; i <= 1025; i++){
        var resp = await fetch("https://pokeapi.co/api/v2/pokemon/" + i);
        var JsonResp = await resp.json();
        // eslint-disable-next-line
        setPkmn(current => [...current, JsonResp]);
      }
    }
    getData();
  }, []);

  function PokeID(id) {
    let pokeId = id.toString();
    if (pokeId.length === 1){
      pokeId = "00" + pokeId;
      return(pokeId);
    }else if (pokeId.length === 2){
      pokeId = "0" + pokeId;
      return(pokeId);
    }
    return(pokeId)
  }

  function Tipos(types) {
    let tipos = types.map(type => `<p class="${type.type.name} tipo">${type.type.name}</p>`);
    tipos = tipos.join('');
    return(tipos);
  }

  function PokeAlt(alt) {
    let pokeAlt = alt.toString();
    if(pokeAlt.length === 1){
      pokeAlt = "0," + pokeAlt;
      return(pokeAlt);
    }else if(pokeAlt.length === 2){
      pokeAlt = pokeAlt[0] + "," + pokeAlt[1];
      return(pokeAlt);
    }else if(pokeAlt.length === 3){
      pokeAlt = pokeAlt.slice(0,2) + "," + pokeAlt.slice(2);
      return(pokeAlt);
    }
  }

  function PokePeso(peso) {
    let pokePeso = peso.toString();
    if(pokePeso.length === 1){
      pokePeso = "0," + pokePeso;
      return(pokePeso);
    }else if(pokePeso.length === 2){
      pokePeso = pokePeso[0] + "," + pokePeso[1];
      return(pokePeso);
    }else if(pokePeso.length === 3){
      pokePeso = pokePeso.slice(0,2) + "," + pokePeso.slice(2);
      return(pokePeso);
    }else if(pokePeso.length === 4){
      pokePeso = pokePeso.slice(0,3) + "," + pokePeso.slice(3);
      return(pokePeso);
    }
  }

  function habilidades(abil) {
    let habs = abil.map(hab => `<p class="habilidad">${(hab.is_hidden)? "Hidden Ability" : "Ability" }: ${hab.ability.name}</p>`);
    habs = habs.join('');
    return(habs);
  }

  return(
    <div className="pokemon-todos">
      {Pkmn?.map(poke => (
        <PokeCard 
          key = {poke.id}
          ID = {PokeID(poke.id)}
          IMG = {poke.sprites.other["official-artwork"].front_default}
          Shiny = {poke.sprites.other["official-artwork"].front_shiny}
          Name = {poke.name}
          Types = {Tipos(poke.types)}
          Height = {PokeAlt(poke.height)}
          Weight = {PokePeso(poke.weight)}
          Abilities = {habilidades(poke.abilities)}
        />
        ))
      }
    </div>
  )
}

export default PokeList;