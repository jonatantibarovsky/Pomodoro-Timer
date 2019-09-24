import React from 'react'
import './controller.css'

function Controller(props) {

    return(
        <div className='controller'>
            <button className='start-stop-button' >
                Start
            </button>
            <button className='reset'>
                Reset
            </button>
        </div>
    )

}

export default Controller