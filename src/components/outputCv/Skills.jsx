import CoolHeader from "../simpleBlocks/CoolHeader";
import common from "../../styles/common.module.css";
export default function Skills({ technicalSkills, headerName, imgIndex }) {
  return (
    <div className={common.sectionContainer=" "+ common.rightSection}>
      <CoolHeader imgIndex={imgIndex} headerName={headerName} />
      {Object.entries(technicalSkills).map((single, iindex) => (
        <section key={iindex} className={common.sectionContainer}>
          <h1 className={common.sectionHeader}>{single[0]}</h1>
          <ul>
            {single[1].map((part, jindex) => (
              <li className={common.li} key={jindex}>
                {part["content"]}
              </li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  );
}
