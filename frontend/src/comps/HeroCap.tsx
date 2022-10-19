import React, { useEffect, useState } from 'react';

export default function HeroCap() {

    const [styles, setStyles] = useState('')

    useEffect(() => {
        setTimeout(() => {
            setStyles(' heroCapAnimate')
        }, 2100);
    })

    return (
        <div className='mt-14 mb-16 text-[7vw]'>
            <p className={styles} id='heroCap'>Party Planning!</p>
        </div>
    )
}