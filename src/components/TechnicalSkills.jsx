import MyInput from "./MyInput";
import MyButton from "./MyButton";
import { useState } from "react";
import style from "../styles/ts.module.css";
function TechnicalSkills({ technicalSkills, setTechnicalSkills }) {
  let [taskShown, setTaskShown] = useState(0);
  const addInputField = (skillName) => {
    console.log(skillName);
    let newTS = { ...technicalSkills };
    newTS[skillName] = [...newTS[skillName], { content: "" }];
    setTechnicalSkills(newTS);
  };
  const deleteInputField = (skillName, jindex) => {
    let newTS = { ...technicalSkills };
    newTS[skillName].splice(jindex, 1);
    setTechnicalSkills(newTS);
  };
  const changeInputField = (e, skillName, jindex) => {
    let newTS = { ...technicalSkills };
    let { name, value } = e.target;
    newTS[skillName][jindex][name] = value;
    setTechnicalSkills(newTS);
  };
  return (
    <>
      {Object.entries(technicalSkills).map(
        (singleTS, iindex) =>
          taskShown === iindex && (
            <form key={iindex} action="" className={singleTS[0]}>
              <div className={style.alignHorizontal + "   align-horizontal"}>
                {taskShown > 0 && (
                  <button
                    onClick={() => {
                      setTaskShown(taskShown - 1);
                    }}
                    type="button"
                  >
                    <i className="bx bx-left-arrow-alt"></i>
                  </button>
                )}

                <h1 className={style.LanguagesHeader}>{singleTS[0]}</h1>
                {taskShown < Object.keys(technicalSkills).length - 1 && (
                  <button
                    onClick={() => {
                      setTaskShown(taskShown + 1);
                    }}
                    type="button"
                  >
                    <i className="bx bx-right-arrow-alt"></i>
                  </button>
                )}
              </div>
              {singleTS[1].map((singleSkill, jindex) => (
                <div
                  key={jindex}
                  className={style.alignVertical + "  align-vertical"}
                >
                  <div
                    className={style.alignHorizontal + "   align-horizontal"}
                  >
                    <MyInput
                      className={style.input}
                      onChange={(e) => {
                        changeInputField(e, singleTS[0], jindex);
                      }}
                      inputName="content"
                      content={singleTS[1][jindex]["content"]}
                    />
                    {singleTS[1].length > 1 && (
                      <MyButton
                        onClick={() => {
                          deleteInputField(singleTS[0], jindex);
                        }}
                        className="remove"
                        content="Remove"
                      />
                    )}
                  </div>
                  {singleTS[1].length - 1 === jindex && (
                    <MyButton
                      className={style.button}
                      onClick={() => {
                        addInputField(singleTS[0]);
                      }}
                      content="Add more"
                    />
                  )}
                </div>
              ))}
            </form>
          )
      )}
    </>
  );
}
export default TechnicalSkills;
