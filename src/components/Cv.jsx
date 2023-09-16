import { forwardRef, useImperativeHandle } from "react";
import Myheader from "./outputCv/Myheader";
import Contact from "./outputCv/Contact";
import Skills from "./outputCv/Skills";
import Experience from "./outputCv/Experience";
import Graduation from "./outputCv/Graduation";
import ProjectsSection from "./outputCv/ProjectsSection";
import style from "../styles/cv.module.css";
const Cv = forwardRef((props, ref) => {
  const { userDetails, shownSections } = props;
  const downloadCvAsPdf = () => {
    /* let element = ref.current; */
    let element = document.getElementById("cv");
    console.log(ref.current)
    if(element){
      html2pdf().from(element).save('document.pdf');
    }
  };
  useImperativeHandle(ref, () => ({ downloadCvAsPdf }));
  return (
    <section
      ref={ref}
      id="cv"
      className={style.container}
      style={{ width: "100vw", height: "100vh" }}
    >
      {shownSections["1"] && (
        <Myheader personalDetails={userDetails["personalDetails"]["content"]} />
      )}
      {shownSections["2"] && (
        <Contact shownLinksList={userDetails["links"]["content"]} />
      )}

      <div className={style.mainContent}>
        {shownSections["4"] && (
          <Experience
            imgIndex="4"
            headerName="Work Experience"
            workExp={userDetails["WorkExperience"]["content"]}
          />
        )}
        {shownSections["3"] && (
          <Skills
            imgIndex="3"
            headerName="Technical Skill"
            technicalSkills={userDetails["technicalSkills"]["content"]}
          />
        )}
        {shownSections["5"] && (
          <ProjectsSection
            imgIndex="5"
            headerName="Projects"
            projects={userDetails["projects"]["content"]}
          />
        )}
        {shownSections["6"] && (
          <Graduation
            imgIndex="6"
            headerName="Education"
            degrees={userDetails["education"]["content"]}
          />
        )}
      </div>
    </section>
  );
});
export default Cv;
