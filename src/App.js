import React, { useState, useEffect, useRef } from "react";
import "./App.css";
import pokedex_logo from "./img/logo.png";
import PokeFilters from "./components/PokeFilters";
import JsonData from "./poke_data.json";
import PokeList from "./components/PokeList";

function App() {

  const [data] = useState(JsonData["type_list"]);
  const [type, setType] = useState("");
  let prevButtonRef = useRef("");

  useEffect(() => {
    prevButtonRef.current = type;
  },[type])

  return(
    <div className="App">
      <header>
        <nav className="nav">
          <img src={pokedex_logo} alt="Logo Pokédex" />
          <ul className="nav-list">
            {(type === "")?(data.map( (con,i) => (
              <li key={i} className="nav-item"><button key={i} className={`btn btn-header ${con.type}`} id={con.type} onClick={() => setType(con.type)}>{con.type}</button></li>
            ))) : null}
            <li className="nav-item"><button className="btn btn-header" id = "" onClick={() => setType("")}>See all</button></li>
          </ul>
        </nav>
      </header>

      <main>
        <div id="todos">
          {(type==="")? <PokeList/> : <PokeFilters botonID={type}/>}
        </div>
      </main>
    </div>
  );
}

export default App;
