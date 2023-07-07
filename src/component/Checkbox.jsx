import React from "react";


export function Checkbox(props) {

    const {
        label="haha",
    } = props;

    return (
        <label className="flex items-center cursor-pointer">
            <input type="checkbox" className="hidden peer"></input>
            <span className="inline-block w-4 h-4 bg-white border border-[#ccc] rounded-sm peer-checked:border-[transparent] peer-checked:bg-[#13C690]"></span>
            {label.length > 0 && <span className="ml-1 select-none text-base">{label}</span>}
        </label>
    )
}