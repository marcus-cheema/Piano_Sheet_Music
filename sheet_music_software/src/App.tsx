import ListGroup from "./components/ListGroup"
import Button from "./components/Button"
import Bar from "./components/Bar"
import Space from "./components/Space"
import Measure from "./components/Measure"
import MusicalNoteButton from "./components/MusicalNoteButton"

function App() {

  let barTypes = ['1', '2', '3', '4', '5']
  let handleSelectNote = (item: string) => {
    console.log(item)
  }
  let measureNumbers = ['1', '2', '3', '4', '5']
  let measureNotes   = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15']

  return(
    <div>
      <div className="measure-container">
        <MusicalNoteButton />
        <Measure number={measureNumbers[0]} numNotes={measureNotes} />
        <Measure number={measureNumbers[1]} numNotes={measureNotes} />
        <Measure number={measureNumbers[2]} numNotes={measureNotes} />
        <Measure number={measureNumbers[3]} numNotes={measureNotes} />
        <Measure number={measureNumbers[4]} numNotes={measureNotes} />
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
