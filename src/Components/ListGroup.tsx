import { useState } from "react";
function ListGroup() {
  let data = ["Mumbai", "Chennai", "Kochi", "Kannur"];
  const [selectedIndex, setSelectedIndex] = useState(-1);
  //   data = [];
  //   const ClickHandler = (event: MouseEvent) => console.log(event);
  return (
    <>
      <h1>Place</h1>
      {/* {data.length === 0 && <p>no list element</p>} */}
      <ul className="list-group">
        {data.map((data, index) => (
          <li
            className={
              selectedIndex == index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={data}
            onClick={() => setSelectedIndex(index)}
          >
            {data}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
