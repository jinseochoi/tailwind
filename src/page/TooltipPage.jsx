import React from "react";
import { Tooltip } from "../component/Tooltip";

export const TooltipPage = () => {
    return (
        <>
            <div className="relative w-12 h-12 bg-slate-300 group">
                <Tooltip text="hello" direction="bottom"/>
            </div>
            <div className="relative group p-2 w-fit bg-yellow-300 rounded-lg hover:bg-yellow-200 transition duration-200 cursor-pointer">
                hover me!
                <Tooltip text="hello" direction="bottom"/>
            </div>
        </>
    );
}