import React, {useState} from "react";
import {CityEditor} from "./CityEditor";
import {CityList} from "./CityList";
import {Container} from "@material-ui/core";

const citiesArray = [{
    name: 'Москва',
    description: 'Лучший город земли'
}, {
    name: 'Киев',
    description: 'Город-герой, Троещина - круто, братва за спиной'
}, {
    name: 'Минск',
    description: 'Столица союзного государства'
}]
export const Ex1 = () => {
    const [cities, setCities] = useState(citiesArray)
    const  [activeIndex, setActiveIndex] = useState(0)

    const handleDescriptionChange = (value) => {
        const newCities = [...cities]
        newCities[activeIndex] = {
            ...newCities[activeIndex],
            description: value
        }
        setCities(newCities)
    }
    return (
        <Container maxWidth="sm" style={{marginTop: '20px', padding: '30px'}}>
            <CityEditor city={cities[activeIndex]} onChange={handleDescriptionChange} />
            <CityList list={cities} onListItemClick={setActiveIndex} />
        </Container>
    )
}
