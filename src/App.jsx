import { useState } from "react";
import "./App.css";
import "./styles/MenuBarList.css";
import MenuBarList from "./components/simpleBlocks/MenuBarList";
import { ReactComponent as Download } from "./assets/download.svg";
import { ReactComponent as Eye } from "./assets/eye.svg";
import { ReactComponent as Trash } from "./assets/trash.svg";
import { ReactComponent as Logo } from "./assets/logo.svg";
import PersonalDataInput from "./components/userInput/PersonalDataInput";
import TechnicalSkills from "./components/userInput/TechnicalSkills";
import Links from "./components/userInput/Links";
import Projects from "./components/userInput/Projects";
import WorkExperience from "./components/userInput/WorkExperience";
import Education from "./components/userInput/Education";
import Cv from "./components/Cv";
function App() {
  let [viewInput, setViewInput] = useState(1);
  let [showPreview, setShowPreview] = useState(false);
  let [showDownload, setShowDownload] = useState(false);
  let [clearInput, setClearInput] = useState(false);
  const item = {
    width: "35px",
    height: "35px",
  };
  let barInputList = [
    { key: 1, value: <i class="bx bxs-user"></i> },
    { key: 2, value: <i class="bx bx-link"></i> },
    { key: 3, value: <i class="bx bxs-brain"></i> },
    { key: 4, value: <i class="bx bxs-briefcase"></i> },
    { key: 5, value: <i class="bx bxs-folder-plus"></i> },
    { key: 6, value: <i class="bx bxs-school"></i> },
  ];
  /* state to check if this section is not empty or not to show it in the cv */
  let [shownSections, setShownSections] = useState({
    1: false,
    2: false,
    1: false,
    3: false,
    4: false,
    5: false,
    6: false,
  });

  const updateContentShown = () => {
    let copy = { ...shownSections };
    Object.values(userDetails).forEach((value) => {
      let key = value["id"];
      copy[key] = !isSectionEmpty(value["content"]);
    });
    console.log(copy);
    setShownSections(copy);
  };
  /* recursivly check if section is empty */
  let isSectionEmpty = (cont) => {
    if (Array.isArray(cont)) {
      return cont.reduce((a, b) => {
        return a && isSectionEmpty(b);
      }, true);
    } else if (typeof cont === "object") {
      return Object.values(cont).reduce((a, b) => {
        return a && isSectionEmpty(b);
      }, true);
    } else if (typeof cont === "string") {
      return cont.length === 0;
    } else {
      return false;
    }
  };
  let [degrees, setDegrees] = useState({
    "degree 1": {
      "Univercity Name": "",
      Degree: "",
      Graduation: "",
      Address: "",
      notes: [{ content: "" }, { content: "" }, { content: "" }],
    },
  });
  let [workExp, setWorkExp] = useState({
    "jop 1": {
      "Company Name": "",
      "Jop Title": "",
      from: "",
      to: "",
      Address: "",
      bulletPoints: [{ content: "" }, { content: "" }, { content: "" }],
    },
  });
  let [projects, setProjects] = useState([
    {
      name: "",
      stack: "",
      bulletPoints: [{ bpcontent: "" }, { bpcontent: "" }, { bpcontent: "" }],
    },
  ]);
  let [personalDetails, setPersonalDetails] = useState({
    "First Name": "",
    "Last Name": "",
    imgUrl: "",
    "Jop Title": "",
    Email: "",
    PhoneNumber: "",
    Address: "",
  });
  let [shownLinksList, setShownLinksList] = useState([]);
  let [technicalSkills, setTechnicalSkills] = useState({
    Languages: [{ content: "" }, { content: "" }, { content: "" }],
    FrameWorks: [{ content: "" }, { content: "" }, { content: "" }],
    "Databases&Libraries": [{ content: "" }, { content: "" }, { content: "" }],
    "Other technologies": [{ content: "" }, { content: "" }, { content: "" }],
  });
  let userDetails = {
    technicalSkills: { content: technicalSkills, id: 3 },
    links: { content: shownLinksList, id: 2 },
    WorkExperience: { content: workExp, id: 4 },
    personalDetails: { content: personalDetails, id: 1 },
    education: { content: degrees, id: 6 },
    projects: { content: projects, id: 5 },
  };

  let barPreview = [{ key: 1, value: <Eye style={item} /> }];
  let barDownload = [{ key: 1, value: <Download style={item} /> }];
  let barClear = [{ key: 1, value: <Trash style={item} /> }];

  return (
    <>
      <section className="header-container">
        <a href="#" className="logo">
          <Logo />
        </a>
        {viewInput == 1 && <h1 className="header-name">Personal Details</h1>}
        {viewInput == 2 && <h1 className="header-name">Links</h1>}
        {viewInput == 3 && <h1 className="header-name">Technichal skills</h1>}
        {viewInput == 4 && <h1 className="header-name">Work Experience</h1>}
        {viewInput == 5 && <h1 className="header-name">Projects</h1>}
        {viewInput == 6 && <h1 className="header-name">Education</h1>}
      </section>
      <main className="main-content">
        <aside className="menuBar-items">
          <MenuBarList
            barList={barInputList}
            className="menuBar-input"
            callback={setViewInput}
          />
          <MenuBarList
            barList={barPreview}
            className="menuBar-preview"
            callback={() => {
              setShowPreview(true);
              updateContentShown();
            }}
          />
          <MenuBarList
            barList={barDownload}
            className="menuBar-download"
            callback={setShowDownload}
          />
          <MenuBarList
            barList={barClear}
            className="menuBar-garpage"
            callback={setClearInput}
          />
        </aside>
        <div className="input-container">
          {viewInput == 1 && (
            <PersonalDataInput
              personalDetails={personalDetails}
              setPersonalDetails={setPersonalDetails}
            />
          )}
          {viewInput == 2 && (
            <Links
              shownLinksList={shownLinksList}
              setShownLinksList={setShownLinksList}
            />
          )}
          {viewInput == 3 && (
            <TechnicalSkills
              technicalSkills={technicalSkills}
              setTechnicalSkills={setTechnicalSkills}
            />
          )}
          {viewInput == 4 && (
            <WorkExperience workExp={workExp} setWorkExp={setWorkExp} />
          )}
          {viewInput == 5 && (
            <Projects projects={projects} setProjects={setProjects} />
          )}
          {viewInput == 6 && (
            <Education degrees={degrees} setDegrees={setDegrees} />
          )}
        </div>
      </main>
      {showPreview  && (<Cv userDetails= {userDetails} shownSections = {shownSections} />)}
    </>
  );
}
export default App;
