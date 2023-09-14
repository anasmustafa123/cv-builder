import { useState } from "react";

function MyButton({
  content = "click me",
  className = "",
  backgroundColor = "#ffffff",
  hoverColor = "#efefef",
  onClick,
  type = "button",
}) {
  const [isClicked, setIsClicked] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  return (
    <button
      type={type}
      className={className}
      onClick={onClick}
      onPointerOut={() => {
        setIsClicked(false);
      }}
      onPointerEnter={() => {
        setIsHovered(true);
      }}
      onPointerLeave={() => {
        setIsHovered(false);
      }}
      style={{
        backgroundColor: isClicked
          ? clickColor
          : isHovered
          ? backgroundColor
          : backgroundColor,
        borderRadius: "0.3rem",
        fontWeight: "bold",
        borderColor: isHovered ? hoverColor : "transparent",
      }}
    >
      {content}
    </button>
  );
}

export default MyButton;
