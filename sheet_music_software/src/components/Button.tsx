import { MouseEvent, useState } from 'react';

interface ButtonProps {
    name: string;
    color: string;
    onSelectButton: (item: string) => void
}


function Button(props: ButtonProps) {
    let handleClick = (event: MouseEvent) => console.log(event)
    return (
        <>
            <li 
                className={'btn btn-' + props.color}
                onClick= { () => {
                    props.onSelectButton(props.name)
                }}
            >
                {props.name}
            </li>
        </>
    )

}

export default Button