'use client'
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import Image from 'next/image';

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
    }, [params.name])
    
    if (Pokemon == null) {
        return <div>Loading...</div>
    }
    return (
        <>
            <div className='back-button p-4'>
                <Link href='../' className='bg-blue-500 text-white py-1 px-2 rounded hover:bg-slate-800 px-8'>ย้อนกลับ</Link>
            </div>
            <div className='flex justify-center'>
                <div className='grid sm:grid-cols-1 md:grid-cols-2 justify-center gap-6'>
                    <div className='flex justify-center'>
                        <Image className='h-auto' src={Pokemon.sprites.front_default} alt={params.name} width={320} height={0} />
                    </div>
                    <div>
                        <span className='text-3xl font-bold'>{params.name}</span>
                        <hr />
                        <div className='grid grid-cols-1 pt-4 text-md gap-2'>
                            <div className="flex justify-between">
                                <span>ความสูง:</span> <span>{Pokemon.height} cm</span>
                            </div>
                            <div className="flex justify-between">
                                <span>น้ำหนัก:</span> <span>{Pokemon.weight} kg</span>
                            </div>
                            <div className="flex justify-between">
                                <span>ประเภท:</span>
                                <div className='flex justify-items-end gap-1'>
                                    {Pokemon.types.map((type: any) => {
                                        return (
                                            <span key={type.type.name} className="inline-flex items-center rounded-md bg-blue-800 px-2 py-1 text-xs font-medium text-white ring-1 ring-inset ring-yellow-600/20">
                                                {type.type.name}
                                            </span>
                                        )
                                    })}
                                </div>
                            </div>
                            <div className="flex justify-between">
                                <span>สกิล:</span>
                                <div className='flex justify-items-end gap-1'>
                                    {Pokemon.abilities.map((ability: any) => {
                                        return (
                                            <span key={ability.ability.name} className="inline-flex items-center rounded-md bg-blue-800 px-2 py-1 text-xs font-medium text-white ring-1 ring-inset ring-yellow-600/20">
                                                {ability.ability.name}
                                            </span>
                                        )
                                    })}
                                </div>
                            </div>
                            <div>
                                <span>สถานะ</span>
                                <div className='pl-4'>
                                    {Pokemon.stats.map((stat: any) => {
                                        return (
                                            <div key={stat.stat.name} className='flex justify-between'>
                                                <span>{stat.stat.name}</span>
                                                <span>{stat.base_stat}</span>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
