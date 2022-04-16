import { textChange } from "./chrome-utils/textChange";

function App() {
  function handleOnTextChange() {
    textChange();
  }

  return (
    <>
      <button onClick={handleOnTextChange}>change font and color</button>
    </>
  );
}

export default App;
