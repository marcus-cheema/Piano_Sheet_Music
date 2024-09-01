import React from 'react'
import '../App.css';
import quarter_note from "../assets/images/quarter_note_paint.png"  
import {useState, DragEvent, MouseEvent} from 'react'


interface SpaceProps {
    number:  string
    measure: string
    selectedNote: string | null
    onSelectNote: (item: string) => void
}

function Space(props: SpaceProps) {

    let [notes, setNotes] = useState<string[]>([]);

    let handleOnDrop = (e: DragEvent) => {
        let noteType = e.dataTransfer.getData('noteType') as string;
        console.log("i am a " + noteType)
        setNotes([...notes, noteType])
        console.log(notes)
    }
    
    let handleDragOver = (e: DragEvent) => { e.preventDefault(); } // necessary for some reason

    let handleClick = (e: MouseEvent) => {        
        if (props.selectedNote) {
            let noteType = props.selectedNote // maybe not good to create variable each time.
            setNotes([...notes, noteType]) // dont have to update the new value... let the user keep placing until they select BLANK or hit ESC
            console.log(notes)
        } else { console.log("No Note Selected!!") }
    }
    
    return(
        <div
            className={'space'}
            key={'M' + props.measure + ' ' + props.number}
            // onClick= { () => {
            //     props.onSelectNote('M' + props.measure + ' ' + props.number)
            // }}
            onClick= { (e: MouseEvent) => {
                handleClick(e)
            }}
            onDrop={handleOnDrop}
            onDragOver={handleDragOver}
        >
            {notes.includes('quarter_note') && (
                <img src={quarter_note} className='musical-note-drop'/>
            )}
        </div>)
}

export default Space

