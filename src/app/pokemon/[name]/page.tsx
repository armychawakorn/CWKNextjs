'use client'
import React, { useEffect, useState } from 'react'

export default function Pokemon({ params }: { params: { name: string } }) {
    const [Pokemon, setPokemon] = useState<any | null>(null);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${params.name}`);
                const json = await res.json();
                console.log(json);
                setPokemon(json);
            } catch (e) {
                console.error(e);
            }
        }
        fetchData();
    }, [])
    if (Pokemon == null) {
        return <div>Loading...</div>
    }
    return (
        <div className='grid grid-col-1 justify-center'>
            <div style={{ border: '1px solid black' }}>
                <img src={Pokemon?.sprites.front_default} alt={params.name} style={{ height: 'auto', width: '256px' }} />
                <hr style={{border: '1px solid black'}} />
                <span className='text-3xl font-bold px-3'>{Pokemon.name}</span>
            </div>
        </div>
    )
}
