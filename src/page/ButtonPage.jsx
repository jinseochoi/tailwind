import React from "react";
import { Button } from "../component/Button";

export const ButtonPage = () => {
    return (
        <>
            <h1 className="text-4xl font-bold mb-4">Button</h1>

            {/* preview */}
            <div className="flex gap-4">
                <Button icon="d" tooltipText="qrwefas" tooltipDir="right"/>
                <Button text="hahaha" tooltipText="안녕하세요. 이것은 툴팁 입니다. 안녕하세요. 이것은 툴팁 입니다." tooltipDir="bottom" tooltipWidth="100px"/>
                <Button tooltipText="dshakl"/>
                <Button icon="d" text="adaf" tooltipText="hello. i'm tooltip! hello. i'm tooltip!" tooltipDir="top"/>
                <Button type="normal" text="hello" tooltipText="안녕하세요. 이것은 툴팁 입니다. hello. i'm tooltip!" tooltipDir="left"/>
            </div>
            
            {/* code */}

            {/* attribute */}
        </>
    );
}