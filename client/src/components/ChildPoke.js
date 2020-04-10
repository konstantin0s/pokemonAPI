import React from "react";
import { Link } from "react-router-dom";
import './css/poke.css';

const Pokemon = (props) => {

  return (
  
    <div className="containerx">


      <div className="inner-list" key={props.pokemon.name}>
       

   <h2>
            Pokemon : {' '}
            {props.pokemon.name
              ? props.pokemon.name 
              : "No Name available"}
          </h2>

          <h3>
            Url: {' '}
            {props.pokemon.url ? props.pokemon.url : "No URL available"}
            {/* <Link target="_blank" to={props.pokemon.url}>This url has no component</Link> */}
          </h3>

       

      </div>
   
    </div>
  );
}

export default Pokemon;
