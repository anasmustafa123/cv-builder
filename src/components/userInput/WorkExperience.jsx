import MyInput from "../simpleBlocks/MyInput";
import MyButton from "../simpleBlocks/MyButton";
import MyLabel from "../simpleBlocks/MyLabel";
import { useState } from "react";
import style from "../../styles/workExp.module.css";
function WorkExperience({workExp, setWorkExp}) {
  let [jopShown, setTaskShown] = useState(0);
  const addWorkExp = () => {
    let len = Object.keys(workExp).length;
    let nextWorkName = `jop ${len + 1}`;
    let newJop = { ...workExp };
    newJop[nextWorkName] = {
      "Company Name": "",
      "Jop Title": "",
      from: "",
      to: "",
      Address: "",
      bulletPoints: [{ content: "" }, { content: "" }, { content: "" }],
    };
    setWorkExp(newJop);
  };
  const removeWorkExp = (jopName) => {
    let newJop = { ...workExp };
    delete newJop[jopName];
    console.log(jopName);
    let i = 1;
    for (let key in newJop) {
      let tempdata = newJop[key];
      delete newJop[key];
      key = `jop ${i++}`;
      newJop[key] = tempdata;
    }
    console.log(newJop);
    jopShown > 0 && setTaskShown(jopShown - 1);
    setWorkExp(newJop);
  };
  const addInputField = (jopName) => {
    let newJop = { ...workExp };
    newJop[jopName]["bulletPoints"] = [
      ...newJop[jopName]["bulletPoints"],
      { content: "" },
    ];
    setWorkExp(newJop);
  };
  const deleteInputField = (jopName, jindex) => {
    let newJop = { ...workExp };
    newJop[jopName]["bulletPoints"].splice(jindex, 1);
    setWorkExp(newJop);
  };
  const changeInputField = (e, jopName, jindex) => {
    let newJop = { ...workExp };
    let { name, value } = e.target;
    console.log({ name, value, jindex });
    if (jindex === undefined) {
      newJop[jopName][name] = value;
    } else newJop[jopName]["bulletPoints"][jindex][name] = value;
    setWorkExp(newJop);
  };
  return (
    <>
      {Object.entries(workExp).map(
        (singleJop, iindex) =>
          jopShown === iindex && (
            <form key={iindex} action="" className={singleJop[0]}>
              <div className={style.alignHorizontal + "  align-horizontal"}>
                {jopShown > 0 && (
                  <button
                    onClick={() => {
                      setTaskShown(jopShown - 1);
                    }}
                    type="button"
                  >
                    <i className="bx bx-left-arrow-alt"></i>
                  </button>
                )}
                {jopShown < Object.keys(workExp).length - 1 && (
                  <>
                    <div></div>
                    <button
                      onClick={() => {
                        setTaskShown(jopShown + 1);
                      }}
                      type="button"
                    >
                      <i className="bx bx-right-arrow-alt"></i>
                    </button>
                  </>
                )}
              </div>
              <div className={style.alignHorizontal + "  align-horizontal"}>
                <h1 className={style.LanguagesHeader}>{`jop ${iindex + 1}`}</h1>

                {Object.keys(workExp).length - 1 === iindex && (
                  <button
                    className="addWorkExp"
                    type="button"
                    onClick={addWorkExp}
                  >
                    <i className="bx bx-layer-plus"></i>
                  </button>
                )}
                {Object.keys(workExp).length > 1 && (
                  <button
                    className="removeWorkExp"
                    type="button"
                    onClick={() => {
                      removeWorkExp(singleJop[0]);
                    }}
                  >
                    <i className="bx bx-layer-minus"></i>
                  </button>
                )}
              </div>
              <MyInput
                onChange={(e) => {
                  changeInputField(e, singleJop[0]);
                }}
                inputName="Company Name"
                content={singleJop[1]["Company Name"]}
                className={style.labeledInput + " Company_Name"}
                name="Company Name"
                placeHolder="google"
              />
              <MyInput
                className={style.labeledInput}
                onChange={(e) => {
                  changeInputField(e, singleJop[0]);
                }}
                content={singleJop[1]["Jop Title"]}
                inputName="Jop Title"
                name="Jop Title"
                placeHolder="software engineer"
              />
              <div className="align-horizontal">
                <MyInput
                  className={style.labeledInput}
                  content={singleJop[1]["from"]}
                  onChange={(e) => {
                    changeInputField(e, singleJop[0]);
                  }}
                  inputName="from"
                  type="date"
                  name="from"
                />
                <MyInput
                  className={style.labeledInput}
                  content={singleJop[1]["to"]}
                  onChange={(e) => {
                    changeInputField(e, singleJop[0]);
                  }}
                  inputName="to"
                  type="date"
                  name="to"
                />
              </div>
              <MyInput
                className={style.labeledInput}
                content={singleJop[1]["Address"]}
                onChange={(e) => {
                  changeInputField(e, singleJop[0]);
                }}
                inputName="Address"
                name="Address"
                placeHolder="silicon valley"
              />
              <MyLabel
                className={style.label}
                forId="bulletPoints"
                name="Bullet Points"
              />
              <div className={style.bulletPoints} id="bulletPoints">
                {singleJop[1]["bulletPoints"].map((jopArr, jindex) => (
                  <div
                    key={jindex}
                    className={style.alignVertical + " align-vertical"}
                  >
                    <div className="align-horizontal">
                      <MyInput
                        className={style.input}
                        onChange={(e) => {
                          changeInputField(e, singleJop[0], jindex);
                        }}
                        inputName="content"
                        content={
                          singleJop[1]["bulletPoints"][jindex]["content"]
                        }
                      />
                      {singleJop[1]["bulletPoints"].length > 1 && (
                        <MyButton
                          onClick={() => {
                            deleteInputField(singleJop[0], jindex);
                          }}
                          className="remove"
                          content="Remove"
                        />
                      )}
                    </div>
                    {singleJop[1]["bulletPoints"].length - 1 === jindex && (
                      <MyButton
                        className={style.button}
                        onClick={() => {
                          addInputField(singleJop[0]);
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
export default WorkExperience;
