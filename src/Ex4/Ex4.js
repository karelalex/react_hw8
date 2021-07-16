import React from "react";
import {NotComposed} from "./NotComposed";
import {Composed} from "./Composed";

export const Ex4 = () => {
    return (
        <div>
            <h2>Без композиции</h2>
            <NotComposed />
            <h2>C композицией</h2>
            <Composed />
        </div>

    )
}
