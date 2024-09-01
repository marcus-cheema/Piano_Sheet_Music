import ListGroup from "./components/ListGroup"
import Button from "./components/Button"
import Bar from "./components/Bar"
import Space from "./components/Space"
import Measure from "./components/Measure"
import MusicalNotes from "./components/MusicalNotes"
import {MouseEvent, useState, useEffect} from 'react'

function App() {
  // create global useState for the click and place operation
  let [selectedNote, setSelectedNote] = useState<string | null>(null); // make useState to determine the clicked note.
  
  // should make a Function where if I click the WHITE area of HTML, it DESELECTS a note. let handleSelectBlank = ...
  let handleSelectNote = (e: MouseEvent, noteType: string) => {
    // console.log(e);
    // console.log(e.target);
    // console.log(e.currentTarget);
    e.stopPropagation(); // prevent from deselecting the note.
    console.log(noteType, e.target);
    setSelectedNote(noteType);
  }

  let handleSelectBlank = (e: MouseEvent) => { // when blank HTML selected, deselect note.
    setSelectedNote(null);
  }

  useEffect(() => { // when ESC key is pressed, deselect note. 
    let handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedNote(null)
      }
    }
  })

  let barTypes = ['1', '2', '3', '4', '5']
  let measureNumbers = ['1', '2', '3', '4', '5']
  let measureNotes   = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21']

  return(
    <div onClick={handleSelectBlank}>
      <div className="measure-container">
        <MusicalNotes selectedNote={null} onSelectNote={handleSelectNote}/>
        {measureNumbers.map((number) => (
          <Measure number={number} numNotes={measureNotes} selectedNote={selectedNote}/>
        ))}
      </div>
    </div>
  )
}

export default App // render component onto screen



// let items = ['New York', 'Chicago', 'Washington', 'Lee', 'Nuts'];
  // let heading = "Cities"
  // let handleSelectItem = (item: string) => {
  //   console.log(item)
  // }

  // let buttonName = 'doom button'
  // let buttonColors = ['primary', 'secondary', 'success', 'danger', 'warning']
  // let handleSelectButton = (item: string) => {
  //   console.log(item)
  // }

  // return (
  //   <div>
  //     <ListGroup items={items} heading={heading} onSelectItem={handleSelectItem}></ListGroup>
  //     <Button name={buttonName} color={buttonColors[3]} onSelectButton={handleSelectButton}></Button>
  //   </div>)
