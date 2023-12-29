import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUsers } from '../Redux/Action'
import { Checkbox, Paper, Typography } from '@mui/material'
import Users from './Users'
import Bankbalance from './Bankbalance'
import Eyecolor from './Eyecolor'
import Height from './Height'
import Weight from './Weight'
import Gender from './Gender'
import Car from './Car'
import SouthIcon from '@mui/icons-material/South'; const Home = () => {
    const { data } = useSelector(s => s.users)
    const dispatch = useDispatch()
    const [checked, setChecked] = useState([false, false, false, false, false, false, false])
    console.log(checked)
    const bankhelp = []
    const bankBalance = []
    data.map(item =>
        bankhelp[item.backBalance] = []
    )
    data.map(item =>
        bankhelp[item.backBalance] = [...bankhelp[item.backBalance], item])
    Object.entries(bankhelp).map(([key, value]) =>
        bankBalance.push({ bankBalance: key, names: value[0].first_name }))
    console.log(bankBalance);
    const genderhelp = []
    const gender = []
    data.map(item =>
        genderhelp[item.gender] = []
    )
    data.map(item =>
        genderhelp[item.gender] = [...genderhelp[item.gender], item])
    Object.entries(genderhelp).map(([key, value]) =>
        gender.push({ name: key, y: value.length }))
    console.log(gender);
    const agehelp = []
    const age = []
    data.map(item =>
        agehelp[item.age] = []
    )
    data.map(item =>
        agehelp[item.age] = [...agehelp[item.age], item])
    Object.entries(agehelp).map(([key, value]) =>
        age.push({ age: key, quantity: value.length }))
    console.log(age);
    const eyeColorhelp = []
    const eyeColor = []
    data.map(item =>
        eyeColorhelp[item.eyeColor] = []
    )
    data.map(item =>
        eyeColorhelp[item.eyeColor] = [...eyeColorhelp[item.eyeColor], item])
    Object.entries(eyeColorhelp).map(([key, value]) =>
        eyeColor.push({ eyeColor: key, quantity: value.length }))
    console.log(eyeColor);
    const weighthelp = []
    const weight = []
    data.map(item =>
        weighthelp[item.weight] = []
    )
    data.map(item =>
        weighthelp[item.weight] = [...weighthelp[item.weight], item])
    Object.entries(weighthelp).map(([key, value]) =>
        weight.push({ name: key, y: value.length }))
    console.log(weight);
    const heighthelp = []
    const height = []
    data.map(item =>
        heighthelp[item.height] = []
    )
    data.map(item =>
        heighthelp[item.height] = [...heighthelp[item.height], item])
    Object.entries(heighthelp).map(([key, value]) =>
        height.push({ name: key, y: value.length }))
    console.log(height);
    const carhelp = []
    const car = []
    data.map(item =>
        carhelp[item.car] = []
    )
    data.map(item =>
        carhelp[item.car] = [...carhelp[item.car], item])
    Object.entries(carhelp).map(([key, value]) =>
        car.push({ car: key, quantity: value.length }))
    console.log(car);
    useEffect(() => {
        dispatch(getUsers())
    }, [])
    return (
        <div>
            <div id='checkes' className='flex  items-center justify-center gap-2 flex-wrap w-screen sm:gap-5'>
                <a href='#bank'>

                    <Paper className="flex items-center justify-center pr-2">

                        <Checkbox
                            checked={ checked[0] }
                            onChange={ (e) => setChecked(l => [e.target.checked, l[1], l[2], l[3], l[4], l[5], l[6]]) }
                            inputProps={ { 'aria-label': 'controlled' } }
                        />
                        <Typography>bank Balance</Typography>
                        <SouthIcon />
                    </Paper>
                </a>
                <a href='#he'>
                    <Paper className="flex items-center justify-center pr-2">

                        <Checkbox
                            checked={ checked[1] }
                            onChange={ (e) => setChecked(l => [l[0], e.target.checked, l[2], l[3], l[4], l[5], l[6]]) }
                            inputProps={ { 'aria-label': 'controlled' } }
                        />
                        <Typography>height</Typography>
                        <SouthIcon />

                    </Paper>
                </a>
                <a href='#we'>
                    <Paper className="flex items-center justify-center pr-2">

                        <Checkbox
                            checked={ checked[2] }
                            onChange={ (e) => setChecked(l => [l[0], l[1], e.target.checked, l[3], l[4], l[5], l[6]]) }
                            inputProps={ { 'aria-label': 'controlled' } }
                        />
                        <Typography>weight</Typography>
                        <SouthIcon />

                    </Paper>
                </a>
                <a href='#eye'>

                    <Paper className="flex items-center justify-center pr-2">

                        <Checkbox
                            checked={ checked[3] }
                            onChange={ (e) => setChecked(l => [l[0], l[1], l[2], e.target.checked, l[4], l[5], l[6]]) }
                            inputProps={ { 'aria-label': 'controlled' } }
                        />
                        <Typography>eye color</Typography>
                        < SouthIcon />

                    </Paper>
                </a>
                <a href='#gen'>

                    <Paper className="flex items-center justify-center pr-2">

                        <Checkbox
                            checked={ checked[4] }
                            onChange={ (e) => setChecked(l => [l[0], l[1], l[2], l[3], e.target.checked, l[5], l[6]]) }
                            inputProps={ { 'aria-label': 'controlled' } }
                        />
                        <Typography>gender</Typography>
                        < SouthIcon />

                    </Paper>
                </a>
                <a href='#car'>

                    <Paper className="flex items-center justify-center pr-2">

                        <Checkbox
                            checked={ checked[5] }
                            onChange={ (e) => setChecked(l => [l[0], l[1], l[2], l[3], l[4], e.target.checked, l[6]]) }
                            inputProps={ { 'aria-label': 'controlled' } }
                        />
                        <Typography >car</Typography>
                        < SouthIcon />
                    </Paper>
                </a>
                <a href='#user'>

                    <Paper className="flex items-center justify-center pr-2">

                        <Checkbox
                            checked={ checked[6] }
                            onChange={ (e) => setChecked(l => [l[0], l[1], l[2], l[3], l[4], l[5], e.target.checked]) }
                            inputProps={ { 'aria-label': 'controlled' } }
                        />
                        <Typography >users</Typography>
                        < SouthIcon />
                    </Paper>
                </a>
            </div>
            <div className='mt-3 flex items-center justify-around w-full flex-col sm:flex-row'>

                <div className='ml-3 md:flex md:flex-wrap h-screen overflow-y-scroll grid grid-cols-1 w-full md:flex-row'>

                    { checked[0] && <Paper elevation={ 0 } className='md:w-1/2 w-full h-max' id="bank">
                        <Bankbalance flagg={ checked[0] } bankBalance={ bankBalance } />
                    </Paper> }
                    { checked[3] && <Paper elevation={ 0 } className='md:w-1/2 w-full h-max' id="eye">
                        <Eyecolor flagg={ checked[3] } eyeColor={ eyeColor } />
                    </Paper> }
                    { checked[1] && <Paper elevation={ 0 } className='md:w-1/2 w-full h-max' id="he">
                        <Height flagg={ checked[1] } height={ height } />
                    </Paper> }
                    { checked[2] && <Paper elevation={ 0 } className='md:w-1/2 w-full h-max' id="we">
                        <Weight flagg={ checked[2] } weight={ weight } />
                    </Paper> }
                    { checked[4] && <Paper elevation={ 0 } className='md:w-1/2 w-full h-max' id="gen">
                        <Gender flagg={ checked[4] } gender={ gender } />
                    </Paper> }
                    { checked[5] && <Paper elevation={ 0 } className='md:w-1/2 w-full h-max' id="car">
                        <Car flagg={ checked[5] } car={ car } />
                    </Paper> }
                </div>
                {/* <div id='user'> */ }

                { checked[6] && <Paper elevation={ 0 } className='m-3' id="user">
                    <Users flagg={ checked[6] } list={ data } />
                </Paper> }
                {/* </div> */ }

            </div>
        </div>
    )
}

export default Home