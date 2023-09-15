import style from "../../styles/graduation.module.css";
import CoolHeader from "../simpleBlocks/CoolHeader";

export default function Graduation({ degrees, headerName, imgIndex }) {
  return (
    <div className={style.graduationContainer}>
      <CoolHeader imgIndex={imgIndex} headerName={headerName} />
      {Object.values(degrees).map((singleGrad, iindex) => (
        <div key={iindex} className={style.singleContainer}>
          <div className={style.alignHorizontal}>
            <h1>{singleGrad["Univercity Name"]}</h1>
            <p>{singleGrad["Graduation"]}</p>
          </div>
          <div className={style.alignHorizontal}>
            <h1>{singleGrad["Degree"]}</h1>
            <p>{singleGrad["Address"]}</p>
          </div>
          <ul className={style.ul}>
            {Object.values(singleGrad["notes"]).map((singleNote, jindex) => (
              <li key={jindex} className={style.li}>
                {singleNote["content"]}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
