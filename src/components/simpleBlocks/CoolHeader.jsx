import style from "../../styles/coolHeader.module.css"
import education from "../../assets/education.svg"
import projectsImg from "../../assets/projectsImg.svg"
import brain from "../../assets/brain.svg"
import work from "../../assets/work.svg"

export default function CoolHeader({ headerName= "temp", imgIndex=6}){
  let imgMap = {
    3: brain,
    4: work,
    5: projectsImg,
    6: education 
  }
    return (
      <div className={style.container}>
        <span className={style.imgContainer}><img src={imgMap[imgIndex]} alt="#" /></span>
        <h1>{headerName}</h1>
      </div> 
    ) 
}