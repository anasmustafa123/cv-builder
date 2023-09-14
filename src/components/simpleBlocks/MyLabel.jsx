export default function MyLabel({ name, forId, isRequired= false, className="" }) {
  name = isRequired ? name + "*" : name;
  const labelStyle = {
    fontWeight: '600',
    letterSpacing: '0px',
    fontSize: "1.4rem"
  }
  return (
    <>
      <label className={className} style={labelStyle} htmlFor={forId}>{name}</label>
    </>
  );
}
