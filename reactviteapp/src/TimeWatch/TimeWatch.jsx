import React, { useState } from 'react'
import '../App.css'
import Circle from './Circle'
let interval;
function TimeWatch() {
    const [start, setStart] = useState(0)
    const startTime = () => {
     interval= setInterval(() => {
            setStart((time) => time + 1)
        }, 1000)
    }
    const stopTime = () => {
        clearInterval(interval)
    }
    return (
        <div className='topwatch'>
        <h1>{start}</h1>
            <Circle
                statename={start}
                name="start"
                color="green"
                handleClick={startTime}
            />
            <Circle
                name="Stop"
                color="orange"
                handleClick={stopTime}
            />
            <Circle
                name="Reset"
                color="red"
                handleClick={()=>setStart(0)}
            />
        </div>
    )
}

export default TimeWatch