import React from "react";
import {Grid, makeStyles, Paper, Typography} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));

export const Ex3 = () => {
    const classes = useStyles();

    // Первый пример (неправильно)
    const state1 = {
        people: [{
            name: 'Bill'
        }, {
            name: 'Joe'
        }]
    }
    const people = state1.people
    const peopleBefore = JSON.stringify(people, null, 2)
    const copy1 = state1.people.slice()
    copy1[0].name = 'Bob'
    state1.people = copy1
    const peopleAfter = JSON.stringify(people, null, 2)
    const statePeopleAfter = JSON.stringify(state1.people, null, 2)

    // Второй пример (правильно)
    const state2 = {
        people: [{
            name: 'Bill'
        }, {
            name: 'Joe'
        }]
    }
    const people2 = state2.people
    const people2Before = JSON.stringify(people2, null, 2)
    const copy2 = state1.people.slice()
    copy2[0] = {
        ...copy2[0],
        name: 'Bob'
    }
    state2.people = copy2
    const people2After = JSON.stringify(people2, null, 2)
    const state2PeopleAfter = JSON.stringify(state2.people, null, 2)

    // Третий пример, добавление элемента, правильное
    const state3 = {
        data: [
            {name: 'Boris', active: true},
            {name: 'Marsik', active: false}
        ]
    }

    const initialData3 = state3.data
    const initialData3Before = JSON.stringify(initialData3, null, 2)
    const copy3 = state3.data.slice()
    copy3.push({name: 'Persik', active: true})
    state3.data = copy3

    const initialData3After = JSON.stringify(initialData3, null, 2)
    const state3DataAfter = JSON.stringify(state3.data, null, 2)

    // Четвертый пример, сортировка, неправильная
    const state4 = {
        data: [
            {name: 'Boris', active: true},
            {name: 'Marsik', active: false}
        ]
    }

    const initialData4 = state4.data
    const initialData4Before = JSON.stringify(initialData4, null, 2)
    const copy4 = state4.data.sort((i, j) => j.name.localeCompare(i.name))
    state4.data = copy4

    const initialData4After = JSON.stringify(initialData4, null, 2)
    const state4DataAfter = JSON.stringify(state4.data, null, 2)

    // Пятый пример, сортировка, правильная
    const state5 = {
        data: [
            {name: 'Boris', active: true},
            {name: 'Marsik', active: false}
        ]
    }

    const initialData5 = state5.data
    const initialData5Before = JSON.stringify(initialData5, null, 2)
    const copy5 = [...state5.data]
    copy5.sort((i, j) => j.name.localeCompare(i.name))
    state5.data = copy5

    const initialData5After = JSON.stringify(initialData5, null, 2)
    const state5DataAfter = JSON.stringify(state5.data, null, 2)

    // Шестой пример, неправильная подмена через мап
    const state6 = {
        data: [
            {name: 'Boris', active: true},
            {name: 'Marsik', active: false}
        ]
    }

    const initialData6 = state6.data
    const initialData6Before = JSON.stringify(initialData6, null, 2)
    const copy6 = state6.data.map((item) => {
        if (item.name === 'Marsik') {
            item.active = true
        }
        return item
    })
    state6.data = copy6

    const initialData6After = JSON.stringify(initialData6, null, 2)
    const state6DataAfter = JSON.stringify(state6.data, null, 2)

    // Седьмой пример, правильная подмена через мап
    const state7 = {
        data: [
            {name: 'Boris', active: true},
            {name: 'Marsik', active: false}
        ]
    }

    const initialData7 = state7.data
    const initialData7Before = JSON.stringify(initialData7, null, 2)
    const copy7 = state7.data.map((item) => {
        if (item.name === 'Marsik') {
            return {
                ...item,
                active: true
            }
        }
        return item
    })
    state7.data = copy7

    const initialData7After = JSON.stringify(initialData7, null, 2)
    const state7DataAfter = JSON.stringify(state6.data, null, 2)

    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Paper className={classes.paper}>
                        <Typography variant='h4'>Первый пример</Typography>
                    </Paper>
                </Grid>
                <Grid item xs={4}>
                    <Paper className={classes.paper}>
                        <Typography variant='h6'>Исходное состояние до</Typography>
                        <pre>{peopleBefore}</pre>
                    </Paper>
                </Grid>
                <Grid item xs={4}>
                    <Paper className={classes.paper}>
                        <Typography variant='h6'>Исходное состояние после</Typography>
                        <pre>{peopleAfter}</pre>
                    </Paper>
                </Grid>
                <Grid item xs={4}>
                    <Paper className={classes.paper}>
                        <Typography variant='h6'>Результат</Typography>
                        <pre>{statePeopleAfter}</pre>
                    </Paper>
                </Grid>

                <Grid item xs={12}>
                    <Paper className={classes.paper}>
                        <Typography variant='h4'>Второй пример</Typography>
                    </Paper>
                </Grid>
                <Grid item xs={4}>
                    <Paper className={classes.paper}>
                        <Typography variant='h6'>Исходное состояние до</Typography>
                        <pre>{people2Before}</pre>
                    </Paper>
                </Grid>
                <Grid item xs={4}>
                    <Paper className={classes.paper}>
                        <Typography variant='h6'>Исходное состояние после</Typography>
                        <pre>{people2After}</pre>
                    </Paper>
                </Grid>
                <Grid item xs={4}>
                    <Paper className={classes.paper}>
                        <Typography variant='h6'>Результат</Typography>
                        <pre>{state2PeopleAfter}</pre>
                    </Paper>
                </Grid>

                <Grid item xs={12}>
                    <Paper className={classes.paper}>
                        <Typography variant='h4'>Третий пример</Typography>
                    </Paper>
                </Grid>
                <Grid item xs={4}>
                    <Paper className={classes.paper}>
                        <Typography variant='h6'>Исходное состояние до</Typography>
                        <pre>{initialData3Before}</pre>
                    </Paper>
                </Grid>
                <Grid item xs={4}>
                    <Paper className={classes.paper}>
                        <Typography variant='h6'>Исходное состояние после</Typography>
                        <pre>{initialData3After}</pre>
                    </Paper>
                </Grid>
                <Grid item xs={4}>
                    <Paper className={classes.paper}>
                        <Typography variant='h6'>Результат</Typography>
                        <pre>{state3DataAfter}</pre>
                    </Paper>
                </Grid>

                <Grid item xs={12}>
                    <Paper className={classes.paper}>
                        <Typography variant='h4'>Четвёртый пример</Typography>
                    </Paper>
                </Grid>
                <Grid item xs={4}>
                    <Paper className={classes.paper}>
                        <Typography variant='h6'>Исходное состояние до</Typography>
                        <pre>{initialData4Before}</pre>
                    </Paper>
                </Grid>
                <Grid item xs={4}>
                    <Paper className={classes.paper}>
                        <Typography variant='h6'>Исходное состояние после</Typography>
                        <pre>{initialData4After}</pre>
                    </Paper>
                </Grid>
                <Grid item xs={4}>
                    <Paper className={classes.paper}>
                        <Typography variant='h6'>Результат</Typography>
                        <pre>{state4DataAfter}</pre>
                    </Paper>
                </Grid>

                <Grid item xs={12}>
                    <Paper className={classes.paper}>
                        <Typography variant='h4'>Пятый пример</Typography>
                    </Paper>
                </Grid>
                <Grid item xs={4}>
                    <Paper className={classes.paper}>
                        <Typography variant='h6'>Исходное состояние до</Typography>
                        <pre>{initialData5Before}</pre>
                    </Paper>
                </Grid>
                <Grid item xs={4}>
                    <Paper className={classes.paper}>
                        <Typography variant='h6'>Исходное состояние после</Typography>
                        <pre>{initialData5After}</pre>
                    </Paper>
                </Grid>
                <Grid item xs={4}>
                    <Paper className={classes.paper}>
                        <Typography variant='h6'>Результат</Typography>
                        <pre>{state5DataAfter}</pre>
                    </Paper>
                </Grid>

                <Grid item xs={12}>
                    <Paper className={classes.paper}>
                        <Typography variant='h4'>Шестой пример</Typography>
                    </Paper>
                </Grid>
                <Grid item xs={4}>
                    <Paper className={classes.paper}>
                        <Typography variant='h6'>Исходное состояние до</Typography>
                        <pre>{initialData6Before}</pre>
                    </Paper>
                </Grid>
                <Grid item xs={4}>
                    <Paper className={classes.paper}>
                        <Typography variant='h6'>Исходное состояние после</Typography>
                        <pre>{initialData6After}</pre>
                    </Paper>
                </Grid>
                <Grid item xs={4}>
                    <Paper className={classes.paper}>
                        <Typography variant='h6'>Результат</Typography>
                        <pre>{state6DataAfter}</pre>
                    </Paper>
                </Grid>

                <Grid item xs={12}>
                    <Paper className={classes.paper}>
                        <Typography variant='h4'>Седьмой пример</Typography>
                    </Paper>
                </Grid>
                <Grid item xs={4}>
                    <Paper className={classes.paper}>
                        <Typography variant='h6'>Исходное состояние до</Typography>
                        <pre>{initialData7Before}</pre>
                    </Paper>
                </Grid>
                <Grid item xs={4}>
                    <Paper className={classes.paper}>
                        <Typography variant='h6'>Исходное состояние после</Typography>
                        <pre>{initialData7After}</pre>
                    </Paper>
                </Grid>
                <Grid item xs={4}>
                    <Paper className={classes.paper}>
                        <Typography variant='h6'>Результат</Typography>
                        <pre>{state7DataAfter}</pre>
                    </Paper>
                </Grid>

            </Grid>
        </div>
    )
}
