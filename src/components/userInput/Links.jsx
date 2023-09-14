import MySelect from "../simpleBlocks/MySelect";
export default function Links({ shownLinksList, setShownLinksList }) {
  return (
    <>
      <MySelect
        shownLinksList={shownLinksList}
        setShownLinksList={setShownLinksList}
      />
    </>
  );
}
