import React, { useEffect, useState } from "react";

export default function HeroCap() {
    const [styles, setStyles] = useState("");

    useEffect(() => {
        setTimeout(() => {
            setStyles(" heroCapAnimate");
        }, 1600);
    });

    function toggleDarkMode() {
        const html = document.querySelector('html')
        const currClasses = html.classList;

        if (currClasses.value === '') {
            html.classList.add('dark')
        } else
        if (currClasses.value === 'dark') {
            html.classList.remove('dark')
        }
    }

    return (
        <div className="mt-10 tb:mt-14 mb-12 text-[11vw] tb:text-[3.8rem] tn:text-[52px] font-light hover:text-[#f7cc3f] onhoverColorTrans cursor-pointer" onClick={toggleDarkMode}>
            <p className={styles} id="heroCap">
        Party Planning!
            </p>
        </div>
    );
}
