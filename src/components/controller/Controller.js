import React from 'react'
import './controller.css'

function Controller(props) {

    return(
        <div className = 'controller'>
            <button className = 'start-stop-button' onClick = {props.startStop} >
                { props.hasStarted ? 'Stop' : 'Start' }
            </button>
            <button className = 'reset' onClick = { props.reset }>
                Reset
            </button>
        </div>
    )

}

export default Controller