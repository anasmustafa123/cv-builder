import Myheader from "./outputCv/Myheader";
import style from "../styles/cv.module.css";
export default function Cv({ userDetails, shownSections }) {
  return (
    <>
      {shownSections["1"] && (
        <section
          className="container"
          style={{ width: "100vw", height: "100vh" }}
        >
          <section className={style.header + " align-horizontal"}>
            <div className={style.part1 + " align-horizontal"}>
              <span className={style.mainImg}>
                <img
                  src={userDetails["personalDetails"]["content"]["imgUrl"]}
                  alt=""
                />
              </span>
              <div className="align-vertical">
                <div className={style.name}>anas mustafa</div>
                <div className={style.jopTitle}>software engineer</div>
              </div>
            </div>
            <div className={style.part2 + " align-vertical"}>
              <div className={style.phoneNumber}>01206495631</div>
              <div className={style.email}>anasmuostafa@gmail.com</div>
              <div className={style.address}>17 mostafa ebada maharambek</div>
            </div>
          </section>
        </section>
      )}
      {shownSections["2"] && <div>links</div>}
      {shownSections["3"] && <div>technicalSkills</div>}
      {shownSections["4"] && <div>work experience</div>}
      {shownSections["5"] && <div>projects</div>}
      {shownSections["6"] && <div>education</div>}
    </>
  );
}
