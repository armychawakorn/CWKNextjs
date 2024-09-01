"use client"
import React, { useEffect, useState } from 'react'

export default function page({ params }: { params: { name: string } }) {
    const [pokemon, setPokemon] = useState<any | null>(null);
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
    return (
        <div></div>
    )
}
