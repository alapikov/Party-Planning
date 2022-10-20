import React, { useEffect, useState } from 'react';

export default function StartScreen() {

    const [styles, setStyles] = useState('w-full bg-white h-full fixed z-50')

    useEffect(() => {
        setTimeout(() => {
            setStyles('w-full bg-white h-full fixed z-50 startScreen')
        }, 650);
        setTimeout(() => {
            const startScreen = document.getElementById('startScreen')
            startScreen.remove()
        }, 1900);
    })

    return (
        <div className={styles} id='startScreen'>
        </div>
    )
}