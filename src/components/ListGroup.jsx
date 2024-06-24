import { Fragment, MouseEvent, useState, React } from "react";

interface ListGroupProps {
  items: string[];
  heading: String;
  // This is the way to define functions inside props. Using this you can pass function implementations with components.
  onSelectItem: (item: string) => void;
}


export default function ListGroup({ items, heading, onSelectItem }: ListGroupProps) {
  const [selectedIndex, setSelectedIndex] = useState(-1);

  const getMessage = () => {
    return items.length === 0 ? (
      <p>No item exist in the list: Geronimo</p>
    ) : null;
  };


  return (
    <Fragment>
      <h1>{heading}</h1>
      <ul className="list-group">
        {/* This is the standard way to get conditional jsx in react */}
        {getMessage()}
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            // onClick={() => console.log("Clicked on: " + item, index)}
            // onClick={handleClick}
            onClick={() => {
              console.log("Clicked on: " + item, index);
              setSelectedIndex(index);
              onSelectItem(count => count + 1);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </Fragment>
  )
}