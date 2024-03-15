import React, { useState } from "react";
import { createPortal } from "react-dom";
import "../styles/PokeCard.css";
import PokeModal from "./PokeModal";

function PokeCard({ ID, IMG, Shiny, Name, Types, Height, Weight, Abilities, Cry}) {
  const [openModal, setOpenModal] = useState(false);


  return (
    <div className="pokemon" onClick={() => setOpenModal(true)}>
      <p className="pokemon-id-back">{`#`}{ID}</p>
      <div className="pokemon-imagen">
        <img src={IMG} alt={Name}/>
      </div>
      <div className="pokemon-info">
        <div className="nombre-contenedor">
          <p className="pokemon-id">{ID}</p>
          <h2 className="pokemon-nombre">{Name}</h2>
        </div>
        <div className="pokemon-tipos" dangerouslySetInnerHTML={{__html:Types}}>
        </div>
        <div className="pokemon-stats">
          <p className="stat">{Height} m</p>
          <p className="stat">{Weight} kg</p>
        </div>
      </div>
      {createPortal(<PokeModal 
        open={openModal} 
        onClose={() => setOpenModal(false)} 
        PokeIMG={IMG} 
        PokeShiny={Shiny}
        PokeID={ID}
        PokeName={Name}
        PokeTypes={Types}
        PokeAbilities={Abilities}
        PokeCry={Cry}
      />, document.body)}
    </div>
    
  );
}

export default PokeCard;