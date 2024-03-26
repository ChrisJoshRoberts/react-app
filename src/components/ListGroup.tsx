import { useState } from "react";

interface ListGroupProps {
  items: string[];
  heading: string;
}

function ListGroup({items, heading}: ListGroupProps) {
  //hook
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <div className="m-5">
      <h1>{heading}</h1>
      {items.length === 0 && <p>There are no items!</p>}
      <ul className="list-group col-12 col-lg-3 col-md-6">
        {items.map((item, index) => (
          <li
            key={item}
            onClick={() => setSelectedIndex(index)}
            className={selectedIndex === index ? "list-group-item active" : "list-group-item"}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListGroup;
