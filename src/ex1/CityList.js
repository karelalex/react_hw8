import React from "react";
import {Typography} from "@material-ui/core";

export const CityList = ({list, onListItemClick}) => {
    return (
        <ul>
            {list.map((item, index) => (<li key={item.name} onClick={() => onListItemClick(index)}>
                <Typography variant={'h3'}>{item.name}</Typography>
                <Typography variant={'body1'}>{item.description}</Typography>
            </li>))}
        </ul>
    )
}
