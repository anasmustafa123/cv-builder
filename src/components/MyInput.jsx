import MyLabel from "./MyLabel";
export default function MyInput({
  type = "text",
  id,
  className,
  isRequired = false,
  name,
  inputName,
  content,
  placeHolder = "",
  onChange
}) {
  const inputStyle = {
    background: "#ffffff",
    border: "transparent",
    borderRadius: "0.6rem",
    letterSpacing: "0",
  };
  const labeledInputStyle = {
    display: "flex",
    flexDirection: "column"
  };
  return (
    <>
      {isRequired ? (
        (type == "file" || !name) ? (
          <input
            style={inputStyle}
            type={type}
            id={id}
            className={className}
            accept="image/*"
            placeholder={placeHolder}
            value={content}
            onChange={onChange}
            name={inputName}
            required
          />
        ) : (
          <div className={className+" labeled-input"} style={labeledInputStyle}>
            <MyLabel forId={id} name={name} isRequired={isRequired} />
            <input
              style={inputStyle}
              type={type}
              id={id}
              placeholder={placeHolder}
              value={content}
              onChange={onChange}
              name={inputName}
              required
            />
          </div>
        )
      ) : (type == "file" || !name) ? (
        <input
          style={inputStyle}
          type={type}
          id={id}
          className={className}
          accept="image/*"
          value={content}
          onChange={onChange}
          name={inputName}
          placeholder={placeHolder}
        />
      ) : (
        <div className={className+" labeled-input"} style={labeledInputStyle}>
          <MyLabel forId={id} name={name} isRequired={isRequired} />
          <input
            style={inputStyle}
            type={type}
            id={id}
            value={content}
            onChange={onChange}
            name={inputName}
            placeholder={placeHolder}
          />
        </div>
      )}
    </>
  );
}
