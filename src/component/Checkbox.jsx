import React from "react";


export function Checkbox(props) {

    const {
        label,
        checked=false,
        disabled=false,
    } = props;

    return (
        <label className="inline-flex items-center cursor-pointer group" tabIndex={0}>
            <input type="checkbox" className="hidden peer" defaultChecked={checked} disabled={disabled}></input>
            <span className="inline-block w-4 h-4 bg-white border border-[#ccc] rounded-sm peer-checked:border-[transparent] peer-checked:bg-[#13C690] peer-checked:bg-check peer-checked:bg-contain peer-disabled:opacity-30 peer-disabled:ring-0 transition duration-200 group-focus:outline-0 group-focus:ring-[#13C69040] group-focus:ring-2"></span>
            {label && <span className="ml-1 select-none text-base peer-disabled:opacity-30">{label}</span>}
        </label>
    )
}