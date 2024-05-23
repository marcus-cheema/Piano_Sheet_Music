import quarter_note from "../assets/images/quater_note.jpg"
import '../App.css'

function MusicalNoteButton() {
    return(
        <button 
            className={'musical-note-button'}
        >    
            <img src={quarter_note} className={'musical-note-image'}/>
        </button>
    )
}

export default MusicalNoteButton