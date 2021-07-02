import React from 'react'
import {TextField} from "@material-ui/core";
export const CityEditor = ({city, onChange}) => (
    <div>
        <TextField multiline variant="outlined"
                   label={city.name}
                   value={city.description}
                   onChange={(e) => onChange(e.target.value)}
        />
    </div>
)
