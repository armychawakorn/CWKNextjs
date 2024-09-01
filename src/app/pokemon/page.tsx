import Card from '@/components/Card';
import React from 'react'

export interface resPokemons{
    name: string;
    url: string;
}

export default async function page() {
    const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=10&offset=0');
    const json = await res.json();
    const pokemons: resPokemons[] = json.results;
    return (
        <div className='grid grid-cols-4'>
            {pokemons.map((pokemon) => {
                return <Card key={pokemon.name} name={pokemon.name} url={pokemon.url} />
            })}
        </div>
    )
}
