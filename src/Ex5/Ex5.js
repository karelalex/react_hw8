import React from "react";
import {Modalko, ModalkoText} from "./Modalko";
import './Modalko.css'

export const Ex5 = () => (
    <div>
        <p>Наследование</p>
        <ModalkoText />
        <p>Композиция</p>
        <Modalko>
            <p className="content">Совсем не умный и не важный текст</p>
        </Modalko>
    </div>
)
