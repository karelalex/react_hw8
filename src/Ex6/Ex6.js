import React, {useState} from "react";
import {FormControl, Grid, InputLabel, MenuItem, Paper, Select, Slider, Typography} from "@material-ui/core";
export const Ex6 = () => {
    const [speedLimit, setSpeedLimit] = useState(60)
    const [currentSpeed, setCurrentSpeed] = useState(0)
    return(
        <Grid container spacing={3} style={{width: '500px', marginTop: '70px', marginLeft: '50px'}}>
            <Grid item xs={6} >
                <Paper style={{padding: '20px'}}>
                    <Car speed={currentSpeed} onChange={setCurrentSpeed} />
                </Paper>
            </Grid>
            <Grid item xs={6}>
                <Paper style={{padding: '20px'}}>
                    <Sign limit={speedLimit} onChange={setSpeedLimit}/>
                </Paper>
            </Grid>
            <Grid item xs={12}>
                <Paper style={{padding: '20px'}}>
                    <Radar currentSpeed={currentSpeed} speedLimit={speedLimit} />
                </Paper>
            </Grid>
        </Grid>
    )
}

const Radar = ({speedLimit, currentSpeed}) => (
    <div>
        <Typography variant='h6'>Ваша скорость</Typography>
        {currentSpeed > speedLimit ?
            <Typography color="error" variant='h5'>Превышена</Typography> :
            <Typography color="primary" variant='h5'>Нормальная</Typography>
        }
    </div>
)

const Car = ({speed, onChange}) => (
    <div>
        <Slider aria-label="Скорость" min={0} max={140} value={speed} onChange={(e, v) => onChange(v)} valueLabelDisplay="on"/>
    </div>
)

const Sign = ({limit, onChange}) => (
    <div>
        <FormControl variant="outlined">
            <InputLabel id="select-outlined-label">Ограничение</InputLabel>
            <Select
                labelId="select-outlined-label"
                id="demo-simple-select-outlined"
                value={limit}
                onChange={(e) => onChange(e.target.value)}
                label="Age"
            >
                <MenuItem value={30}>30</MenuItem>
                <MenuItem value={40}>40</MenuItem>
                <MenuItem value={60}>60</MenuItem>
                <MenuItem value={80}>80</MenuItem>
                <MenuItem value={100}>100</MenuItem>
            </Select>
        </FormControl>
    </div>
)
