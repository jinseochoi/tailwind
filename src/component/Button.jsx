import React, { useEffect, useState } from "react";
import { Tooltip } from "./Tooltip";


export function Button(props) {

    const {
        type,
        text,
        icon,
        tooltipText,
        tooltipDir,
        tooltipWidth,
    } = props;

    const [typeClass, setTypeClass] = useState();

    

    useEffect(() => {
        if(type === "normal") {
            setTypeClass("bg-black text-white")
        } else {
            setTypeClass("bg-primary text-white hover:bg-primary-dark active:shadow-button")
        }
    }, )

    return (
        <div className="relative group">
            <button className={`rounded min-w-[36px] min-h-[36px] px-2 select-none flex items-center justify-center transition-colors duration-200 overflow-hidden relative after:content-[""] after:absolute after:bg-[#ffffff8f] after:opacity-0 after:pt-[350%] after:pl-[350%] after:transition-all after:duration-1000 after:rounded-full after:-mt-[120%] after:-ml-[50%] active:after:p-0 active:after:m-0 active:after:opacity-100 active:after:duration-0 ${typeClass}`}>
                {icon && <i className="inline-block bg-blue-100 w-4 h-4 [&:not(:last-child)]:mr-1"></i>}
                {text && <p className="text-sm">{text}</p>}
            </button>
            <Tooltip text={tooltipText} direction={tooltipDir} width={tooltipWidth}/>
        </div>
    )
}