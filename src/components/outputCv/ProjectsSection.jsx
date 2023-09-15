import style from "../../styles/projectsSection.module.css";
import CoolHeader from "../simpleBlocks/CoolHeader";
export default function ProjectsSection({ projects, headerName, imgIndex }) {
  return (
    <div className={style.projectsContainer}>
      <CoolHeader imgIndex={imgIndex} headerName={headerName} />
      {projects.map((singleProject, iindex) => (
        <div key={iindex} className="projectContainer">
          <div className={style.alignHorizontal}>
            <h1>{singleProject["name"]}</h1>
            <p>{singleProject["stack"]}</p>
          </div>
          <ul>
            {singleProject["bulletPoints"].map((singleNote, jindex) => (
              <li key={jindex} className={style.li}>
                {singleNote["bpcontent"]}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
