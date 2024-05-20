import { MouseEvent, useState } from 'react';

interface ListGroupProps { // PascalCasing
    items: string[];
    heading: string;
    
    // so that we can make something happen after an element on our list is selected.
    onSelectItem: (item: string) => void
}
function ListGroup(props: ListGroupProps) { // pass interface as a parameter
    // let selectedIndex = 0;

    // Hook function (this is a State Hook, it can have data that changes state overtime)
    let [selectedIndex, setSelectedIndex] = useState(-1)
    // useState(-1) returns an array of len 2, with a Variable and a Variable Updater Function. setSelectedIndex updates selectedIndex.
    // can have useState('  ') for strings (names)


    // event handler
    let handleClick = (event: MouseEvent) => console.log(event)
    
    return ( // the empty <> means we are telling React to wrap the entire object within a Fragment. (Same as <Fragment>) 
        // it will return the paragraph if props.items.length === 0, and false if !== 0
        <> 
            <h1>{props.heading}</h1>
            { props.items.length === 0 && <p>No item found</p> }
            <ul  className="list-group">
                {props.items.map((item, index) => (
                    <li 
                        className={ selectedIndex === index ? 'list-group-item active' : 'list-group-item'} 
                        key={item} 
                        onClick={ () => {
                            setSelectedIndex(index);
                            props.onSelectItem(item)
                        }}
                    >
                        {item}
                    </li>)
                )} 
            </ul>;
        </>);
} // usually each item has an ID or something for the key.

export default ListGroup