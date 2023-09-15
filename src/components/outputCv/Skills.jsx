import style from "../../styles/skills.module.css";
import CoolHeader from "../simpleBlocks/CoolHeader";
export default function Skills({ technicalSkills, headerName, imgIndex }) {
  return (
    <div className={style.skillContainer}>
      <CoolHeader imgIndex={imgIndex} headerName={headerName} />
      {Object.entries(technicalSkills).map((single, iindex) => (
        <section key={iindex} className={style.section}>
          <h1 className={style.sectionHeader}>{single[0]}</h1>
          <ul className={style.ul}>
            {single[1].map((part, jindex) => (
              <li className={style.li} key={jindex}>
                {part["content"]}
              </li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  );
}
