import React, { useEffect, useState } from 'react';

export default function HeroCap() {

    const [styles, setStyles] = useState('mt-10 text-[7vw]')

    useEffect(() => {
        setTimeout(() => {
            setStyles('mt-10 text-[7vw] heroCapAnimate')
        }, 2100);
    })

    return (
        <div className={styles} id='heroCap'>
            <p>Party Planning!</p>
        </div>
    )
}