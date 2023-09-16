import CoolHeader from "../simpleBlocks/CoolHeader";
import common from "../../styles/common.module.css"
export default function ProjectsSection({ projects, headerName, imgIndex }) {
  return (
    <div className={common.sectionContainer}>
      <CoolHeader imgIndex={imgIndex} headerName={headerName} />
      {projects.map((singleProject, iindex) => (
        <div key={iindex} className="projectContainer">
          <div className={common.alignHorizontal}>
            <h1>{singleProject["name"]}</h1>
            <p>{singleProject["stack"]}</p>
          </div>
          <ul>
            {singleProject["bulletPoints"].map((singleNote, jindex) => (
              <li key={jindex} className={common.li}>
                {singleNote["bpcontent"]}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
