"use client"
import React, { useEffect, useState } from 'react'
import Link from 'next/link';

export default function Card({ name, url }: { name: string, url: string }) {
    const [pokemon, setPokemon] = useState<any | null>(null);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch(url);
                const json = await res.json();
                console.log(json);
                setPokemon(json);
            } catch (e) {
                console.error(e);
            }
        }
        fetchData();
    }, [])
    if (pokemon == null) {
        return <div>Loading...</div>
    }
    return (
        <div style={{ border: '1px solid black', padding: '10px', margin: '10px', borderRadius: '5px' }}>
            <div className='grid grid-col-1 justify-center'>
                <img src={pokemon.sprites.front_default} alt={name} style={{ height: '256px', width: '256px' }} />
            </div>
            <div className="grid grid-col-1">
                <span className='text-xl'>{name}</span>
                <Link href={`/pokemon/${name}`} style={{ padding: '5px', backgroundColor: 'blue', color: 'white', border: 'none', borderRadius: '5px', textAlign: 'center' }}>
                    Info
                </Link>
            </div>
        </div>
    )
}
