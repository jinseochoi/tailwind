import React from "react";
import { Checkbox } from "../component/Checkbox";

export const CheckboxPage = () => {
    return (
        <>
            <Checkbox />
            <br/>
            <Checkbox label="has label"/>
            <br/>
            <Checkbox label="has label and disabled" disabled={true}/>
            <br/>
            <Checkbox label="has label, disabled and checked" checked={true} disabled={true}/>
        </>
    );
}