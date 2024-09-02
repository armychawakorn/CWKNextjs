import Card from '@/components/Card';
import React from 'react'
import Link from 'next/link';

export const metadata = {
    title: 'Pokemons',
    description: 'List of Pokemons'
}

export interface resPokemons {
    name: string;
    url: string;
}

export default async function page() {
    const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=10&offset=0');
    const json = await res.json();
    const pokemons: resPokemons[] = json.results;
    return (
        <>
            <div className='back-button p-4'>
                <Link href='../' className='bg-blue-500 text-white py-1 px-2 rounded hover:bg-slate-800 px-8'>ย้อนกลับ</Link>
            </div>
            <div className='grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5'>
                {pokemons.map((pokemon) => {
                    return <Card key={pokemon.name} name={pokemon.name} url={pokemon.url} />
                })}
            </div>
        </>
    )
}
