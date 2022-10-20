import React, { useEffect, useState } from 'react';

export default function HeroCap() {

    const [styles, setStyles] = useState('')

    useEffect(() => {
        setTimeout(() => {
            setStyles(' heroCapAnimate')
        }, 1600);
    })

    return (
        <div className='mt-10 tb:mt-14 mb-12 text-[11vw] tb:text-[3.8rem] tn:text-[52px] font-light'>
            <p className={styles} id='heroCap'>Party Planning!</p>
        </div>
    )
}