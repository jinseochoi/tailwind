import React, { useEffect, useState } from "react";


export function Tooltip(props) {

    const {
        text,
        direction,
        width,
    } = props;

    const [directionClass, setDirectionClass] = useState("top-[calc(100%_+_8px)] left-1/2 -translate-x-1/2");
    const [tooltipWidth, setTooltipWidth] = useState();


    useEffect(() => {
        if(direction === "bottom") {
            setDirectionClass("top-[calc(100%_+_8px)] left-1/2 -translate-x-1/2 after:bottom-[100%] after:left-1/2 after:-translate-x-1/2 after:border-b-[#000000b6]")
        }
        else if(direction === "top") {
            setDirectionClass("bottom-[calc(100%_+_8px)] left-1/2 -translate-x-1/2 after:top-[100%] after:left-1/2 after:-translate-x-1/2 after:border-t-[#000000b6]")
        }
        else if(direction === "left") {
            setDirectionClass("top-1/2 right-[calc(100%_+_8px)] -translate-y-1/2 after:left-[100%] after:top-1/2 after:-translate-y-1/2 after:border-l-[#000000b6]")
        }
        else if(direction === "right") {
            setDirectionClass("top-1/2 left-[calc(100%_+_8px)] -translate-y-1/2 after:right-[100%] after:top-1/2 after:-translate-y-1/2 after:border-r-[#000000b6]")
        }
        else {
            setDirectionClass("top-[calc(100%_+_4px)] left-1/2 -translate-x-1/2")
        }

        if(width) {
            const w = `w-[${width}]`
            setTooltipWidth(w);
        }
    }, )

    return (
        <>
        {
            text &&
            <div className={`invisible opacity-0 group-hover:visible group-hover:opacity-100 rounded-md bg-[#000000b6] px-2 py-1 max-w-[300px] absolute z-10 after:content-[''] after:absolute after:border-[transparent] after:border-[6px] transition duration-200 ${directionClass} ${width && tooltipWidth}`}>
                <p className={`text-white text-xs ${!width && "whitespace-nowrap"}`}>{text}</p>
            </div>
        }

        </>
    )
}