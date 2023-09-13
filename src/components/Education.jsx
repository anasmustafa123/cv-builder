import MyInput from "./MyInput";
import MyButton from "./MyButton";
import MyLabel from "./MyLabel";
import { useState } from "react";
import style from "../styles/education.module.css";

function Education({ degrees, setDegrees }) {
  let [degreeShown, setDegreeShown] = useState(0);
  const addDegrees = () => {
    let len = Object.keys(degrees).length;
    let nextDegreeName = `degree ${len + 1}`;
    let newDegree = { ...degrees };
    newDegree[nextDegreeName] = {
      "Univercity Name": "",
      Degree: "",
      Graduation: "",
      School: "",
      notes: [{ content: "" }, { content: "" }, { content: "" }],
    };
    setDegrees(newDegree);
  };
  const removeDegree = (degreeName) => {
    let newDegree = { ...degrees };
    delete newDegree[degreeName];
    console.log(degreeName);
    let i = 1;
    for (let key in newDegree) {
      let tempdata = newDegree[key];
      delete newDegree[key];
      key = `degree ${i++}`;
      newDegree[key] = tempdata;
    }
    console.log(newDegree);
    degreeShown > 0 && setDegreeShown(degreeShown - 1);
    setDegrees(newDegree);
  };
  const addInputField = (degreeName) => {
    let newDegree = { ...degrees };
    newDegree[degreeName]["notes"] = [
      ...newDegree[degreeName]["notes"],
      { content: "" },
    ];
    setDegrees(newDegree);
  };
  const deleteInputField = (degreeName, jindex) => {
    let newDegree = { ...degrees };
    newDegree[degreeName]["notes"].splice(jindex, 1);
    setDegrees(newDegree);
  };
  const changeInputField = (e, degreeName, jindex) => {
    let newDegree = { ...degrees };
    let { name, value } = e.target;
    console.log({ name, value, jindex });
    if (jindex === undefined) {
      newDegree[degreeName][name] = value;
    } else newDegree[degreeName]["notes"][jindex][name] = value;
    setDegrees(newDegree);
  };
  return (
    <>
      {Object.entries(degrees).map(
        (singleDegree, iindex) =>
          degreeShown === iindex && (
            <form key={iindex} action="" className={singleDegree[0]}>
              <div className={style.alignHorizontal + "  align-horizontal"}>
                {degreeShown > 0 && (
                  <button
                    onClick={() => {
                      setDegreeShown(degreeShown - 1);
                    }}
                    type="button"
                  >
                    <i class="bx bx-left-arrow-alt"></i>
                  </button>
                )}
                {degreeShown < Object.keys(degrees).length - 1 && (
                  <>
                    <div></div>
                    <button
                      onClick={() => {
                        setDegreeShown(degreeShown + 1);
                      }}
                      type="button"
                    >
                      <i class="bx bx-right-arrow-alt"></i>
                    </button>
                  </>
                )}
              </div>
              <div className={style.alignHorizontal + "  align-horizontal"}>
                <h1 className={style.LanguagesHeader}>{`degree ${
                  iindex + 1
                }`}</h1>

                {Object.keys(degrees).length - 1 === iindex && (
                  <button
                    className="addDegrees"
                    type="button"
                    onClick={addDegrees}
                  >
                    <i class="bx bx-layer-plus"></i>
                  </button>
                )}
                {Object.keys(degrees).length > 1 && (
                  <button
                    className="removeDegree"
                    type="button"
                    onClick={() => {
                      removeDegree(singleDegree[0]);
                    }}
                  >
                    <i class="bx bx-layer-minus"></i>
                  </button>
                )}
              </div>
              <MyInput
                onChange={(e) => {
                  changeInputField(e, singleDegree[0]);
                }}
                inputName="Univercity Name"
                content={singleDegree[1]["Univercity Name"]}
                className={style.labeledInput + " Univercity Name"}
                name="Univercity Name"
                placeHolder="mit"
              />
              <MyInput
                className={style.labeledInput}
                onChange={(e) => {
                  changeInputField(e, singleDegree[0]);
                }}
                content={singleDegree[1]["Degree"]}
                inputName="Degree"
                name="Degree"
                placeHolder="engineering diploma"
              />
              <div className="align-horizontal">
                <MyInput
                  className={style.labeledInput}
                  content={singleDegree[1]["Graduation"]}
                  onChange={(e) => {
                    changeInputField(e, singleDegree[0]);
                  }}
                  inputName="Graduation"
                  type="date"
                  name="Graduation"
                />
              </div>
              <MyInput
                className={style.labeledInput}
                content={singleDegree[1]["School"]}
                onChange={(e) => {
                  changeInputField(e, singleDegree[0]);
                }}
                inputName="School"
                name="School"
                placeHolder="mit"
              />
              <MyLabel className={style.label} forId="notes" name="Notes" />
              <div className={style.notes} id="notes">
                {singleDegree[1]["notes"].map((jopArr, jindex) => (
                  <div
                    key={jindex}
                    className={style.alignVertical + " align-vertical"}
                  >
                    <div className="align-horizontal">
                      <MyInput
                        className={style.input}
                        onChange={(e) => {
                          changeInputField(e, singleDegree[0], jindex);
                        }}
                        inputName="content"
                        content={singleDegree[1]["notes"][jindex]["content"]}
                      />
                      {singleDegree[1]["notes"].length > 1 && (
                        <MyButton
                          onClick={() => {
                            deleteInputField(singleDegree[0], jindex);
                          }}
                          className="remove"
                          content="Remove"
                        />
                      )}
                    </div>
                    {singleDegree[1]["notes"].length - 1 === jindex && (
                      <MyButton
                        className={style.button}
                        onClick={() => {
                          addInputField(singleDegree[0]);
                        }}
                        content="Add more"
                      />
                    )}
                  </div>
                ))}
              </div>
            </form>
          )
      )}
    </>
  );
}
export default Education;
