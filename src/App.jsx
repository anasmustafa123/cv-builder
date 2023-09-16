import { useState, useRef } from "react";
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
  const ref = useRef(null);
  let [viewInput, setViewInput] = useState(1);
  let [showPreview, setShowPreview] = useState(false);
  let [showDownload, setShowDownload] = useState(false);
  let [clearInput, setClearInput] = useState(false);
  const item = {
    width: "35px",
    height: "35px",
  };
  /*   const call = (elm)=> {
    console.log(html2pdf)
    if (elm) {
      html2pdf()
        .from(elm)
        .save("cv.pdf");
    }
  } */
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
      "Univercity Name": "alexandria univercity",
      Degree: "computer and compunication degree",
      Graduation: "2023-08-05",
      Address: "alexandria egypt",
      notes: [
        { content: "afsd dasf a sdf  das f" },
        { content: "adsfdsf sdfds fsfd s" },
        { content: "asdfsdf asdf sfd" },
      ],
    },
  });
  let [workExp, setWorkExp] = useState({
    "jop 1": {
      "Company Name": "facebook",
      "Jop Title": "software engineer",
      from: "2019-01-01",
      to: "2022-05-01",
      Address: "silicon valuey",
      bulletPoints: [
        { content: "importantn note must be first" },
        { content: "less important note comes second" },
        {
          content:
            "importantn note must be first importantn note must be first importantn note must be first",
        },
      ],
    },
    "jop 2": {
      "Company Name": "twitter",
      "Jop Title": "software engineer",
      from: "2010-01-01",
      to: "2015-05-01",
      Address: "silicon valuey",
      bulletPoints: [
        { content: "importantn note must be first" },
        { content: "less important note comes second" },
        {
          content:
            "importantn note must be first importantn note must be first importantn note must be first",
        },
      ],
    },
  });
  let [projects, setProjects] = useState([
    {
      name: "to-do list",
      stack: "js html css webpack",
      bulletPoints: [
        { bpcontent: "sakjldsjf;sdjkfjas" },
        { bpcontent: "fasg dsaf dasfar wr r gra" },
        { bpcontent: "sdfaf sdfe  rw faw w" },
      ],
    },
    {
      name: "battleship game",
      stack: "js html css webpack jest",
      bulletPoints: [
        { bpcontent: "sghjnakjldsjf;sdjkfjas" },
        { bpcontent: "fasbhg dsaf dasfar wr r gra" },
        { bpcontent: "sdfaf sdfe  rw faw w" },
      ],
    },
  ]);
  let [personalDetails, setPersonalDetails] = useState({
    "First Name": "anas",
    "Last Name": "mustafa",
    imgUrl: "/src/assets/uploadImg.png",
    "Jop Title": "software developer",
    Email: "anasmuostafa@gmail.com",
    PhoneNumber: "01206495631",
    Address: "17-mostafa ebada moharem-bek",
  });
  let [shownLinksList, setShownLinksList] = useState([
    { name: "linkedin", content: "https://linked.username.ip" },
    { name: "github", content: "https://github.username.ip" },
    { name: "portfolio", content: "afsd" },
    { name: "facebook", content: "fads" },
    { name: "mail", content: "afdfd" },
  ]);
  let [technicalSkills, setTechnicalSkills] = useState({
    Languages: [
      { content: "java" },
      { content: "c++" },
      { content: "javaScript" },
    ],
    FrameWorks: [{ content: "react" }, { content: "" }, { content: "" }],
    "Databases&Libraries": [
      { content: "mysql" },
      { content: "sqllite" },
      { content: "" },
    ],
    "Other technologies": [
      { content: "git" },
      { content: "webpack" },
      { content: "linux" },
      { content: "github" },
    ],
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
              updateContentShown();
              setShowPreview(true);
            }}
          />
          <MenuBarList
            barList={barDownload}
            className="menuBar-download"
            callback={(e) => {
              updateContentShown();
              setShowDownload(true);
              /* let elm = document.getElementById("cv"); */
              /* let elm = ref.current; */
              /* console.log(elm); */
              ref.current.downloadCvAsPdf();
              /*              call(elm) */
            }}
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

      {showPreview && (
        <div className="previewContainer">
          <button
            className="unsee"
            onClick={() => {
              setShowPreview(false);
            }}
          >
            <i class="bx bx-hide"></i>
          </button>
          <Cv userDetails={userDetails} shownSections={shownSections} />
        </div>
      )}
      {showDownload && (
        <Cv ref={ref} userDetails={userDetails} shownSections={shownSections} />
      )}
    </>
  );
}
export default App;
