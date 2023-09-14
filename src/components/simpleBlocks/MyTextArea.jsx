export default function MyTextArea({name, className ,id, placeHolder}){
    const textAreaStyle = {
        background: "#ffffff",
        border: "transparent",
        borderRadius: "0.6rem",
        padding: "1rem 0.7rem",
        fontSize: "1.7rem",
        letterSpacing: "0",
        resize: "none"
      };
    return(
        <>
            <textarea style={textAreaStyle} name= {name} className = {className} id={id} placeholder={placeHolder}></textarea>
        </>
    );
}  