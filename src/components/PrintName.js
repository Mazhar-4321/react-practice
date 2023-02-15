import React, { useState } from "react";
export function PrintName(properties) {
    var [name, changeName] = useState('')
    function nameClick(event) {
        changeName(event.target.value)
    }
    return (
        <>
            <input type="text" onInput={nameClick} />
            <span>{name}</span>
        </>
    )
}