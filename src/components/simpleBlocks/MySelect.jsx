import { useState } from "react";
import MyInput from "./MyInput";
import "../../styles/mydropdown.css";
import style from "../../styles/links.module.css";
export default function MySelect({ selectId, shownLinksList,  setShownLinksList}) {
  const [moreLinks, setMoreLinks] = useState(false);
  let [linksList, setLinksList] = useState([
    { name: "linkedin", content: "" },
    { name: "github", content: "" },
    { name: "portfolio", content: "" },
    { name: "facebook", content: "" },
    { name: "mail", content: "" }
  ]);
  const onMoreLinks = () => {
    setMoreLinks(true);
  };
  const canselMoreLinks = () => {
    setMoreLinks(false);
  };
  const submitMoreLinks = (e) => {
    setLinksList([...linksList, { name: e.target[1].value, content: "" }]);
    setMoreLinks(false);
  };
  const onInputChange = (e, index) => {
    let { name, value } = e.target;
    let copyShownLinks = shownLinksList.map((link) =>({...link}));
    copyShownLinks[index][name] = value;
    setShownLinksList(copyShownLinks);
  };
  const onNewLinkData = (index, name) => {
    let newLink = Object.assign({}, linksList[index]);
    !shownLinksList.reduce(
      (a, b) => Object.values(b).includes(name) || a,
      false
    )
      ? setShownLinksList([...shownLinksList, newLink])
      : "";
  };
  return (
    <>
      {moreLinks && (
        <form
          onSubmit={(e) => {
            submitMoreLinks(e);
          }}
          action=""
          className="overlay"
        >
          <span>
            <button
              onClick={canselMoreLinks}
              type="button"
              className="canselContainer btn"
            >
              <i className="bx bx-x"></i>
            </button>
            <MyInput
              name="name"
              type="text"
              placeHolder="twitter"
              isRequired={true}
              id="newLink"
              className="newLink"
            />
            <button type="submit" className="addContainer btn">
              <i className="bx bx-left-arrow-alt"></i>
            </button>
          </span>
        </form>
      )}

      <div className={style.container}>
        <div className="dropdown">
          <span>...Add a Link...</span>
          <div className="dropdown-content">
            {linksList.map((oValue, index) => (
              <li
                onClick={() => {
                  onNewLinkData(index, oValue.name);
                }}
                key={index}
                value={oValue.name}
              >
                {oValue.name}
              </li>
            ))}
            <li
              onClick={onMoreLinks}
              style={{ fontWeight: "600" }}
              key="-1"
              value="newLink"
            >
              add new link
            </li>
          </div>
        </div>
      </div>
      <form action="">
        {shownLinksList.map((linkObj, jindex) => (
          <MyInput
            key={jindex}
            onChange={(e) => {
              onInputChange(e, jindex);
            }}
            inputName="content"
            className={style.marginned}
            type="link"
            id={linkObj.name}
            name={linkObj.name}
            content={linkObj.content}
          />
        ))}
      </form>
    </>
  );
}
