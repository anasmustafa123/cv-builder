import style from "../../styles/contact.module.css";
export default function Contact({ shownLinksList }) {
  return (
    <>
      <div className={style.contactContainer}>
        {shownLinksList.map((single, index) => (
          <div key={index} className={style.alignHorizontal}>
            <label htmlFor={single["name"]}>
              {single["name"]} {": "}
            </label>
            <a
            className={style.a}
              href={single["content"]}
              id={single["name"]}
            >
              {single["content"]}
            </a>
          </div>
        ))}
      </div>
    </>
  );
}
