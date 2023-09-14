import style from "../../styles/header.module.css";

export default function Myheader({ personalDetails }) {
  return (
    <section className={style.header}>
      <div className={style.alignHorizontal + '  '+style.part1}>
        <span className={style.mainImg}>
          <img
            src={personalDetails["imgUrl"]}
            alt=""
          />
        </span>
        <div className={style.alignVertical +" "+ style.nameContainer}>
          <div className={style.name}>
            {personalDetails["First Name"]}{" "}{personalDetails["Last Name"]}
          </div>
          <div className={style.jopTitle}>{personalDetails["Jop Title"]}</div>
        </div>
      </div>
      <div className={style.alignVertical + " " + style.headerLinks}>
        <a href="" className={style.phoneNumber}>
          {personalDetails["PhoneNumber"]}
        </a>
        <a href="" className={style.email}>
          {personalDetails["Email"]}
        </a>
        <a href="" className={style.address}>
          {personalDetails['Address']}
        </a>
      </div>
    </section>
  );
}
