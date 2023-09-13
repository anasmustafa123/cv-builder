import "../styles/MenuBarList.css";
import { useState } from "react";
function MenuBarList({ barList, className, callback }) {
  let [isClicked, setIsClicked] = useState(1);
  const listStyle = {
    height: "fit-content",
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    backgroundColor: "white",
    width: "fit-content",
    padding: "0.7rem",
    borderRadius: "0.3rem",
  };
  return (
    <ul style={listStyle}>
      {barList.map((obj) => {
        let classNames = className;
        if (obj.key === isClicked) {
          classNames += " selected";
        }
        return (
          <li
            key={obj.key}
            id={obj.key}
            className={classNames}
            onClick={() => {
              if (callback && barList.length > 1) {
                callback(obj.key);
                setIsClicked(obj.key);
              } else if (barList.length == 1) {
                callback(true);
              }
            }}
          >
            {obj.value}
          </li>
        );
      })}
    </ul>
  );
}

export default MenuBarList;
