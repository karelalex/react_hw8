import React, {useState} from "react";
import {Paper, Typography} from "@material-ui/core";

export const NotComposed = () => {
    return (
        <>
            <Hero title="Дерево" subtitle="Елка" url="https://a.radikal.ru/a17/2107/24/aef47e698e23.png"/>
            <Hero title="Машина" subtitle="Жигули" url="https://c.radikal.ru/c33/2107/24/09851f21849e.png"/>
        </>
    )
}

const Hero = ({url, title, subtitle}) => {
    const [count, setCount] = useState(0);
    const handleClick = () => setCount(count + 1)
    return (
        <Paper style={{width: '500px'}}>
            <div>
                <img src={url} onClick={handleClick} width={500}/>
            </div>
            <Typography variant='h3'>Кликов {count}</Typography>
            <Typography variant='h1'>{title}</Typography>
            <Typography variant='h2'>{subtitle}</Typography>
        </Paper>
    )
}
