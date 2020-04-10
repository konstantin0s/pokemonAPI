import React, { Component } from 'react';
import ChildPoke from './ChildPoke';
import axios from 'axios';

 class Pokemons extends Component {
     constructor(props) {
         super(props);

         this.state = {
             pokemons: [],
             isLoading: false
         }
     }

       performSearch = (page) => {
    this.setState(state => ({ ...state, isLoading: true }));

    axios.get(`/pokemons`, 
        {
          params: {
            p: page
          }
         }
        )
      .then(res => {
        const pokemons = res.data.results;
        console.log(pokemons);
        this.setState({
          pokemons: pokemons,
          isLoading: false
        });

      })
      .catch(err => console.log(err));
  };

componentDidMount() {
    this.performSearch();
}


    render() {
        console.log(this.state.pokemons);
        const { pokemons, isLoading } = this.state;

        return (
            <div>
                   <h2>up and runnign</h2>

                         {
          isLoading ?  <p>Loading..</p> :
        pokemons.map((pokemon) => (
           <ChildPoke key={pokemon.name}  pokemon={pokemon} />
        ))
         }
                   
                   {/* {this.state.pokemons.map((pokemon) => (
                          <ChildPoke key={pokemon.name}  pokemon={pokemon} />
                   )
                   )} */}
            </div>
        )
    }
}


export default Pokemons;