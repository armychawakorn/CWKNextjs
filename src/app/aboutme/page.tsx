import React from 'react'

export default function page() {
    return (
        <div style={{ width: '100vw', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div style={{ textAlign: 'center', display: 'flex', justifyContent: 'center' }}>
                <div style={{ width: '50%' }}>
                    <img src="https://avatars.githubusercontent.com/u/38024366?v=4" alt="" style={{ width: '512px', height: 'auto', borderRadius: '50%' }} />
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
    )
}
