import CoolHeader from "../simpleBlocks/CoolHeader";
import common from "../../styles/common.module.css";

export default function Graduation({ degrees, headerName, imgIndex }) {
  return (
    <div className={common.sectionContainer + " " + common.rightSection}>
      <CoolHeader imgIndex={imgIndex} headerName={headerName} />
      {Object.values(degrees).map((singleGrad, iindex) => (
        <div key={iindex} className={common.singleContainer}>
          <div className={common.alignHorizontal}>
            <h1>{singleGrad["Univercity Name"]}</h1>
            <p>{singleGrad["Graduation"]}</p>
          </div>
          <div className={common.alignHorizontal}>
            <h1>{singleGrad["Degree"]}</h1>
            <p>{singleGrad["Address"]}</p>
          </div>
          <ul>
            {Object.values(singleGrad["notes"]).map((singleNote, jindex) => (
              <li key={jindex} className={common.li}>
                {singleNote["content"]}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
