import React from "react";
import { useEffect, useState } from "react";
import { PokemonCard } from "./PokemonCard";
import "./PokeList.css"


export const PokeList = () => {
  const [allPokemons, setAllPokemons] = useState([]);

  const getAllPokemons = async () => {
    //con esta api vamos a traer muchos pokemons para el inicio
    const respuesta = await fetch(
      "https://pokeapi.co/api/v2/pokemon?limit=649&offset=0"
    );

    //la guardamos en otra variable convertida a Json

    const data = await respuesta.json();

    // y aqui vamos a consultar o traer cada pokemon que busquemos
    function createPokemonObject(results) {
      results.forEach(async (pokemon) => {
        const response = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${pokemon.name}`
        );

        const data = await response.json();
        setAllPokemons((currentList) => [...currentList, data]);
        await allPokemons.sort((a, b) => a.id - b.id);
      });
    }

    createPokemonObject(data.results);
  };

  useEffect(() => {
    getAllPokemons();
  }, []);

  return (
    <div className="app-container">
      <div className="pokemon-container">
        <div className="all-container">
            {allPokemons.map((pokemonStats,index)=>(
                <PokemonCard key={index} id={pokemonStats.id.toString().padStart(3,"0")} name={pokemonStats.name} image={pokemonStats.sprites.other["official-artwork"].front_default} type={pokemonStats.types[0].type.name} weight={pokemonStats.weight} height={pokemonStats.height} stats={pokemonStats.stats.map((stat)=>(
                  stat.base_start
                )).slice(0,3)} statsName={pokemonStats.stats.map((stat)=>(
                  stat.stat.name
                ))}/>
            ))}
        </div>
      </div>
    </div>
  );
};





// El código  es un componente React llamado PokeList. El componente tiene un estado allPokemons que se inicializa como un array vacío utilizando el hook useState. Luego, el componente utiliza los hooks useEffect y useState para cargar los datos de la PokeAPI y mostrarlos en el componente.

// El método getAllPokemons es asíncrono y utiliza fetch para obtener los datos de la PokeAPI. La respuesta se convierte en un objeto JSON utilizando el método json(). Después, se llama a la función createPokemonObject, que es una función anidada dentro de getAllPokemons.

// La función createPokemonObject toma como argumento la propiedad results del objeto JSON de la respuesta. Dentro de createPokemonObject, se utiliza un bucle forEach para iterar sobre el array de resultados y realizar otra solicitud de API utilizando fetch para obtener información adicional de cada Pokémon. Una vez que se reciben los datos de un Pokémon, se agrega al estado allPokemons utilizando el método setAllPokemons. Finalmente, se ordenan los resultados utilizando el método sort.

// El hook useEffect se utiliza para llamar a getAllPokemons una vez que el componente se monta. Esto asegura que los datos se carguen una vez que el componente se renderiza.

// En el retorno de PokeList, se muestra un elemento div con el texto "PokeList".

// En resumen, este código utiliza la PokeAPI para obtener información sobre los Pokémon y mostrarla en un componente React llamado PokeList. La función getAllPokemons llama a createPokemonObject, que procesa los resultados de la PokeAPI y actualiza el estado allPokemons. El hook useEffect se utiliza para asegurar que los datos se carguen cuando el componente se monta.

////////////////////////////////////////////////////////////////////////////

// La función createPokemonObject se utiliza para obtener información adicional de cada Pokémon individual utilizando su URL específica en la PokeAPI (por ejemplo, "https://pokeapi.co/api/v2/pokemon/1" para el primer Pokémon, Bulbasaur).

// La función createPokemonObject utiliza fetch para obtener la información de cada Pokémon, luego agrega esa información al estado allPokemons utilizando el método setAllPokemons. En resumen, createPokemonObject es responsable de obtener información detallada de cada Pokémon y agregarla al estado allPokemons.
