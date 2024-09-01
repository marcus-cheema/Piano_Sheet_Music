import React from 'react'
import '../App.css'

interface BarProps {
    number:  string
    measure: string
    onSelectNote: (item: string) => void
}

function Bar(props: BarProps) {
    return(
        <div
            className={'bar'}
            key={'M' + props.measure + ' ' + props.number}
            onClick= { () => {
                props.onSelectNote('M' + props.measure + ' ' + props.number)
            }}
        >
            {}
        </div>
    )
}

export default Bar