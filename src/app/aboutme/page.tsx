import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

export const metadata = {
    title: 'About Me',
    description: 'About me'
}

export default function page() {
    return (
        <>
            <div className='back-button p-4'>
                <Link href='../' className='bg-blue-500 text-white py-1 px-2 rounded hover:bg-slate-800 px-8'>ย้อนกลับ</Link>
            </div>
            <div style={{ width: '100vw', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <div style={{ textAlign: 'center', display: 'flex', justifyContent: 'center' }}>
                    <div style={{ width: '50%' }}>
                        <Image className='rounded-full h-auto' src="https://avatars.githubusercontent.com/u/38024366?v=4" alt="" width={512} height={0} />
                    </div>
                </div>

                <div style={{ width: '50%' }}>
                    <div className='info' style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: '10px' }}>
                        <h1>นายชวกร เนืองภา</h1>
                        <p>รหัสนักศึกษา: 653450087-5</p>
                        <p>Email: Chawakorn.n@kkumail.com</p>
                        <p>สาขาวิชา: วิทยาการคอมพิวเตอร์</p>
                    </div>
                </div>
            </div>
        </>
    )
}
