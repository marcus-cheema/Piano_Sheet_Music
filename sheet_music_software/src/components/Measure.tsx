import React from 'react'
import Space from './Space'
import Bar   from './Bar'

import '../App.css'

interface NoteArrays {
    topSpaceNumbers: string[]
    midSpaceNumbers: string[]
    botSpaceNumbers: string[]
    barNumbers     : string[]
}

interface MeasureProps {
    number: string
    numNotes: string[]
    selectedNote: string | null
}

function returnNotes(notesArr: string[]): NoteArrays {
    let totalNotesCount = notesArr.length;
    let notesInBar      = 9;

    let topSpaceNumbers : string[] = []
    let midSpaceNumbers : string[] = []
    let botSpaceNumbers : string[] = []
    let barNumbers      : string[] = []

    if (totalNotesCount < 9) { // return empty if <9 notes (avoid throwing error)
        return{
            topSpaceNumbers: [],
            midSpaceNumbers: [],
            botSpaceNumbers: [],
            barNumbers     : []
        }
    }

    let whiteSpaces = totalNotesCount - notesInBar;
    let topWhiteSpaces = Math.floor(whiteSpaces / 2) // can only support even number of white spaces.
    for (let i = 0; i < topWhiteSpaces; i++)                                     { topSpaceNumbers.push(i.toString()) }       
    for (let i = topWhiteSpaces; i < topWhiteSpaces + notesInBar; i = i + 2)     { barNumbers     .push(i.toString()) } 
    for (let i = topWhiteSpaces + 1; i < topWhiteSpaces + notesInBar; i = i + 2) { midSpaceNumbers.push(i.toString())}
    for (let i = notesInBar + topWhiteSpaces; i < totalNotesCount; i++)          { botSpaceNumbers.push(i.toString()) }

    return { topSpaceNumbers, barNumbers, midSpaceNumbers, botSpaceNumbers }
}

function Measure(props: MeasureProps) {
    
    let handleSelectNote = (item: string) => { console.log(item) }
    let noteArrays: NoteArrays = returnNotes(props.numNotes)

    return(
        <>
            <ul className="bar-space-container">
                {noteArrays.topSpaceNumbers.map((item) => (
                    // space will take its own number, measure, function to handleSelectSpace, and the user's selected note (if they clicked button)
                    // bar shares the same properties as space... 
                    <Space number={item} measure={props.number} onSelectNote={handleSelectNote} selectedNote={props.selectedNote}/>
                ))}
                
                {noteArrays.barNumbers.map((barNumber, index) => (
                    <>
                        <Bar number={barNumber} measure={props.number} onSelectNote={handleSelectNote} />
                        {noteArrays.midSpaceNumbers[index] !== undefined && (
                            <Space number={noteArrays.midSpaceNumbers[index]} measure={props.number} onSelectNote={handleSelectNote} selectedNote={props.selectedNote} />
                        )}
                    </>
                ))}

                {noteArrays.botSpaceNumbers.map((item) => (
                    <Space number={item} measure={props.number} onSelectNote={handleSelectNote} selectedNote={props.selectedNote}/>
                ))}
                
            </ul>
        </>   
    )
}

export default Measure