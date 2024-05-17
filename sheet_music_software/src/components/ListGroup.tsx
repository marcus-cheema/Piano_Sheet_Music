import { MouseEvent, useState } from 'react';

function ListGroup() {
    let items = ['New York', 'Chicago', 'Washington', 'Lee', 'Nuts'];
    // let selectedIndex = 0;
    // Hook function (this is a State Hook, it can have data that changes state overtime)
    let [selectedIndex, setSelectedIndex] = useState(-1)


    // event handler
    let handleClick = (event: MouseEvent) => console.log(event)
    
    return ( // the empty <> means we are telling React to wrap the entire object within a Fragment. (Same as <Fragment>) 
        <> 
            <h1>My List</h1>
            <ul  className="list-group">
                {items.map((item, index) => (
                    <li 
                        className={ selectedIndex === index ? 'list-group-item active' : 'list-group-item'} 
                        key={item} 
                        onClick={ () => setSelectedIndex(index) }
                    >
                        {item}
                    </li>)
                )} 
            </ul>;
        </>);
} // usually each item has an ID or something for the key.

export default ListGroup