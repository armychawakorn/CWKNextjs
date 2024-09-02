"use client"
import React, { useEffect, useState } from 'react'
import Link from 'next/link';
import Image from 'next/image';

export default function Card({ name, url }: { name: string, url: string }) {
    const [pokemon, setPokemon] = useState<any | null>(null);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch(url);
                const json = await res.json();
                setPokemon(json);
            } catch (e) {
                console.error(e);
            }
        }
        fetchData();
    }, [url])

    if (pokemon == null) {
        return (<></>)
    }
    return (
        <div className='border-2 shadow-xl p-4'>
            <div className='grid grid-col-1 justify-center'>
                <Image className='h-auto' src={pokemon.sprites.front_default} alt={name} width={256} height={0} />
            </div>
            <div className="grid grid-col-1">
                <span className='text-xl'>{name}</span>
                <Link className='border-1 bg-blue-500 text-center text-white py-1 rounded hover:bg-slate-800' href={`/pokemon/${name}`}>
                    Info
                </Link>
            </div>
        </div>
    )
}
