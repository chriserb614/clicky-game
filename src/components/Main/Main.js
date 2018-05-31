import React from 'react'
import './Main.css'

const Wrapper = props =>(
    <div className = 'row'>
        <div className = 'main'>{props.children}</div>
    </div>
)

export default Wrapper