import MySelect from "./MySelect";
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
