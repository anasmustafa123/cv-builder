import MyInput from "./MyInput";
import MyButton from "./MyButton";
import MyLabel from "./MyLabel";
import style from "../styles/projects.module.css";

function Projects({ projects, setProjects }) {
  const addProject = () => {
    setProjects([
      ...projects,
      {
        content: "",
        bulletPoints: [{ bpcontent: "" }, { bpcontent: "" }, { bpcontent: "" }],
      },
    ]);
  };
  const removePoject = (index) => {
    let newProjects = [...projects];
    newProjects.splice(index, 1);
    setProjects(newProjects);
  };
  const updateProject = (e, index) => {
    let { name, value } = e.target;
    let newProjects = [...projects];
    console.log({ name, value });
    newProjects[index][name] = value;
    setProjects(newProjects);
  };
  const addBulletPoints = (index) => {
    let newProjects = [...projects];
    newProjects[index]["bulletPoints"].push({ bpcontent: "" });
    setProjects(newProjects);
  };
  const removeBulletPoints = (index, bpindex) => {
    let newProjects = [...projects];
    newProjects[index]["bulletPoints"].splice(bpindex, 1);
    setProjects(newProjects);
  };
  const updateBulletPoint = (e, index, bpindex) => {
    let { name, value } = e.target;
    let newProjects = [...projects];
    newProjects[index]["bulletPoints"][bpindex][name] = value;
    setProjects(newProjects);
  };
  return (
    <>
      {projects.map((singleProject, index) => (
        <ul className={style.ul}>
          <div key={index} className="align-vertical">
            <div className="align-horizontal">
              <div className="align-horizontal">
                <MyInput
                  inputName="name"
                  onChange={(e) => {
                    updateProject(e, index);
                  }}
                  content={singleProject.name}
                  name="name"
                />
                <MyInput
                  inputName="stack"
                  onChange={(e) => {
                    updateProject(e, index);
                  }}
                  content={singleProject.stack}
                  name="tech stack"
                />
              </div>

              {projects.length !== 1 && (
                <MyButton
                  onClick={() => {
                    removePoject(index);
                  }}
                  className="removeProject"
                  content="Remove"
                />
              )}
            </div>
            <MyLabel
              className={style.label}
              forId="bulletPoints"
              name="Bullet Points"
            />
            <ul id="bulletPoints" className="bulletPoints">
              {projects[index]["bulletPoints"].map((singleBP, bpindex) => (
                <div
                  key={bpindex + 50}
                  className={style.alignVertical + "  align-vertical"}
                >
                  <div className="align-horizontal">
                    <MyInput
                      className={style.input}
                      inputName="bpcontent"
                      onChange={(e) => {
                        updateBulletPoint(e, index, bpindex);
                      }}
                      content={
                        projects[index]["bulletPoints"][bpindex]["bpcontent"]
                      }
                    />
                    {projects[index]["bulletPoints"].length !== 1 && (
                      <MyButton
                        onClick={() => {
                          removeBulletPoints(index, bpindex);
                        }}
                        className="remove"
                        content="Remove"
                      />
                    )}
                  </div>
                  {bpindex === projects[index]["bulletPoints"].length - 1 &&
                    projects[index]["bulletPoints"].length < 5 && (
                      <button
                        className={style.button + " " + style.btn}
                        type="button"
                        onClick={() => {
                          addBulletPoints(index);
                        }}
                      >
                        <i class="bx bxs-message-alt-add"></i>
                      </button>
                    )}
                </div>
              ))}
            </ul>
            {index === projects.length - 1 && projects.length < 6 && (
              <button
                className={style.button + " " + style.btn}
                type="button"
                onClick={addProject}
              >
                <i class="bx bxs-folder-plus"></i>
              </button>
            )}
          </div>
        </ul>
      ))}
    </>
  );
}
export default Projects;
