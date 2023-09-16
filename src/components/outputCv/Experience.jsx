import CoolHeader from "../simpleBlocks/CoolHeader";
import common from "../../styles/common.module.css";

export default function Experience({ workExp, headerName, imgIndex }) {
  return (
    <div className={common.sectionContainer}>
      <CoolHeader imgIndex={imgIndex} headerName={headerName} />
      {Object.values(workExp).map((singleExp, iindex) => (
        <div key={iindex} className={common.sectionContainer}>
          <div className={common.alignHorizontal}>
            <h1>{singleExp["Company Name"]}</h1>
            <p>{singleExp["from"] + " : " + singleExp["to"]}</p>
          </div>
          <div className={common.alignHorizontal}>
            <h1 className={common.sectionHeader}>{singleExp["Jop Title"]}</h1>
            <p>{singleExp["Address"]}</p>
          </div>
          <ul>
            {Object.values(singleExp["bulletPoints"]).map(
              (singleNote, jindex) => (
                <li key={jindex} className={common.li}>
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
