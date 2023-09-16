import style from "../../styles/experience.module.css";
import CoolHeader from "../simpleBlocks/CoolHeader";
export default function Experience({ workExp, headerName, imgIndex }) {
  return (
    <div className={style.experienceContainer}>
      <CoolHeader imgIndex={imgIndex} headerName={headerName} />
      {Object.values(workExp).map((singleExp, iindex) => (
        <div key={iindex} className={style.singleContainer}>
          <div className={style.alignHorizontal}>
            <h1>{singleExp["Company Name"]}</h1>
            <p>{singleExp["from"] + " : " + singleExp["to"]}</p>
          </div>
          <div className={style.alignHorizontal}>
            <h1>{singleExp["Jop Title"]}</h1>
            <p>{singleExp["Address"]}</p>
          </div>
          <ul className={style.ul}>
            {Object.values(singleExp["bulletPoints"]).map(
              (singleNote, jindex) => (
                <li key={jindex} className={style.li}>
                  {singleNote["content"]}
                </li>
              )
            )}
          </ul>
        </div>
      ))}
    </div>
  );
}
