import quarter_note from "../assets/images/quarter_note_paint.png"
import '../App.css'
import { MouseEvent, DragEvent, useState } from "react"

interface MusicalNotesProps {
    selectedNote: string | null
    onSelectNote: (e: MouseEvent, noteType: string) => void;
}

function MusicalNotes(props: MusicalNotesProps) {
        
    let handleOnDrag = (e: DragEvent, noteType: string) => {
        e.dataTransfer.setData('noteType', noteType)
    }
    
    return(
        <div 
            className={'quarter-note'}
            draggable
            onDragStart={(e) => handleOnDrag(e, 'quarter_note')}
            onClick= {(e) => {
                props.onSelectNote(e, 'quarter_note')
            }}
        >    
            <img src={quarter_note} className={'musical-note-image'}/>
        </div>
    )
}

export default MusicalNotes