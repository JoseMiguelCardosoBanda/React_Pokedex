import React, {useState} from "react";
import "../styles/PokeModal.css";
import { AiFillCloseCircle } from "react-icons/ai";

function PokeModal({open, onClose, PokeIMG, PokeShiny, PokeID, PokeName, PokeTypes, PokeAbilities}) {
  const [shiny, toggleShiny] = useState(false);
  if(!open) return null

  function region() {
    let pokeRegion = "";
    if(PokeID >= "001" && PokeID <= "151"){
      pokeRegion = "Kanto"
      return(pokeRegion);
    }else if(PokeID >= "152" && PokeID <= "251"){
      pokeRegion = "Johto"
      return(pokeRegion);
    }else if(PokeID >= "252" && PokeID <= "386"){
      pokeRegion = "Hoenn"
      return(pokeRegion);
    }else if(PokeID >= "387" && PokeID <= "493"){
      pokeRegion = "Sinnoh"
      return(pokeRegion);
    }else if(PokeID >= "494" && PokeID <= "649"){
      pokeRegion = "Unova"
      return(pokeRegion);
    }else if(PokeID >= "650" && PokeID <= "721"){
      pokeRegion = "Kalos"
      return(pokeRegion);
    }else if(PokeID >= "722" && PokeID <= "809"){
      pokeRegion = "Alola"
      return(pokeRegion);
    }else if(PokeID >= "810" && PokeID <= "898"){
      pokeRegion = "Galar"
      return(pokeRegion);
    }else if(PokeID >= "899" && PokeID <= "905"){
      pokeRegion = "Hisui"
      return(pokeRegion);
    }else{
      pokeRegion = "Paldea"
      return(pokeRegion);
    }
  }

  return(
    <div className="overlay">
      <div onClick={(e) => e.stopPropagation()} className="modalContainer">
        <div className="image-container">
          <span className="hoverText">Click to Alternate Between Normal and Shiny</span>
          <img className="modalIMG" src={(shiny)? PokeShiny : PokeIMG} onClick={() => toggleShiny(!shiny)} alt={PokeName} />
        </div>
        <div className="modalRight">
          <p onClick={onClose} className="closeBtn"><AiFillCloseCircle /></p>
          <div className="content">
            <div className="info-container">
              <h1 className="poke-id">#{PokeID}</h1>
              <h2 className="poke-name">{PokeName}</h2>
              <h3>Type</h3>
              <div className="poke-type" dangerouslySetInnerHTML={{__html:PokeTypes}}></div>
              <div className="region">Origin Region: {region()}</div>
              <div className="poke-abilities" dangerouslySetInnerHTML={{__html:PokeAbilities}}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    )
}

export default PokeModal;