import MyInput from "../simpleBlocks/MyInput";
import style from "../../styles/personalDetails.module.css";
import uploadImg from "../../assets/uploadImg.png";
import { useState } from "react";
export default function PersonalDataInput({
  personalDetails,
  setPersonalDetails,
}) {
  let [loadImage, setLoadImage] = useState(uploadImg);
  const onInputChange = (e) => {
    let { name, value } = e.target;
    let copyPD = { ...personalDetails };
    copyPD[name] = value;
    setPersonalDetails(copyPD);
  };
  const onImageChange = (e) => {
    let { name, files } = e.target;
    let copyPD = { ...personalDetails };
    copyPD[name] = URL.createObjectURL(e.target.files[0]);
    setLoadImage(URL.createObjectURL(e.target.files[0]))
    setPersonalDetails(copyPD);
  };
  return (
    <form className={style.form}>
      <div className=" align-horizontal">
        <label className="uploadImg" htmlFor="image">
          <img src={loadImage} alt="" />
        </label>
        <MyInput
          onChange={(e) => {
            onImageChange(e);
            updateInputImg(e);
          }}
          inputName="imgUrl"
          type="file"
          className={style.imageinput}
          id="image"
        />
        <div className="align-vertical">
          <MyInput
            onChange={(e) => {
              onInputChange(e);
            }}
            content={personalDetails["First Name"]}
            inputName="First Name"
            name="First Name"
            className="f-name"
            id="f-name"
            placeHolder="john"
            isRequired={true}
          />
          <MyInput
            onChange={(e) => {
              onInputChange(e);
            }}
            content={personalDetails["Last Name"]}
            inputName="Last Name"
            name="Last Name"
            className="l-name"
            id="l-name"
            placeHolder="the great"
            isRequired={true}
          />
        </div>
      </div>
      <div className="align-vertical margin-vertical">
        <div className="align-horizontal">
          <MyInput
            onChange={(e) => {
              onInputChange(e);
            }}
            content={personalDetails["Jop Title"]}
            inputName="Jop Title"
            name="Jop Title"
            className="jopTitle"
            id="jopTitle"
            placeHolder="software engineer"
          />
          <MyInput
            onChange={(e) => {
              onInputChange(e);
            }}
            content={personalDetails.Email}
            inputName="Email"
            name="Email"
            type="email"
            className="email"
            id="email"
            placeHolder="blabla@ya.com"
            isRequired={true}
          />
        </div>
        <MyInput
          onChange={(e) => {
            onInputChange(e);
          }}
          content={personalDetails.PhoneNumber}
          inputName="PhoneNumber"
          name="Phone Number"
          type="number"
          className="p-num"
          id="p-num"
          placeHolder="123 456 678"
        />
        <MyInput
          onChange={(e) => {
            onInputChange(e);
          }}
          content={personalDetails.Address}
          inputName="Address"
          name="Address"
          className="address"
          id="address"
          placeHolder="13 blabla bla's street"
        />
      </div>
    </form>
  );
}
