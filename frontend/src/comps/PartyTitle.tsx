import React from "react";
import circle1 from "./../uiElems/circle1.png";
import arrow1Right from "./../uiElems/arrow1Right.png";
import arrow1Left from "./../uiElems/arrow1Left.png";

export default function PartyTitle() {
    return (
        <div className="mb-10 tb:mb-12">
            <div className="flex flex-row justify-center items-center mb-4 tb:mb-6 gap-10 tb:gap-14">
                <div className="w-[4.5vw] h-[4.5vw] tb:w-[22px] tb:h-[22px] tn:w-[16px] tn:h-[16px]">
                    <img src={arrow1Left} className="object-contain"></img>
                </div>

                <div className="font-bold text-[5vw] tb:text-[1.7rem] tn:text-[20px]">
          Вечеринка на пляже
                </div>

                <div className="w-[4.5vw] h-[4.5vw] tb:w-[22px] tb:h-[22px] tn:w-[16px] tn:h-[16px]">
                    <img src={arrow1Right} className="object-contain"></img>
                </div>
            </div>
            <div className="flex flex-row justify-center items-center gap-3 tb:gap-5 tn:gap-4">
                <div className="w-[2.8vw] h-[2.8vw] tb:w-[14px] tb:h-[14px] tn:w-[12px] tn:h-[12px]">
                    <img src={circle1} className="object-contain"></img>
                </div>
                <div className="w-[2.8vw] h-[2.8vw] tb:w-[14px] tb:h-[14px] tn:w-[12px] tn:h-[12px]">
                    <img src={circle1} className="object-contain"></img>
                </div>
                <div className="w-[2.8vw] h-[2.8vw] tb:w-[14px] tb:h-[14px] tn:w-[12px] tn:h-[12px]">
                    <img src={circle1} className="object-contain"></img>
                </div>
                <div className="w-[2.8vw] h-[2.8vw] tb:w-[14px] tb:h-[14px] tn:w-[12px] tn:h-[12px]">
                    <img src={circle1} className="object-contain"></img>
                </div>
                <div className="w-[2.8vw] h-[2.8vw] tb:w-[14px] tb:h-[14px] tn:w-[12px] tn:h-[12px]">
                    <img src={circle1} className="object-contain"></img>
                </div>
            </div>
        </div>
    );
}
