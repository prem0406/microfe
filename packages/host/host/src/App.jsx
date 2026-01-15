import "./App.css";
import Button from "remoteApp/Button";
import { useShareContext } from "remoteApp/myProvider";

function App() {
  const { count, increment } = useShareContext();

  return (
    <>
      <h1>Host App</h1>
      <button onClick={increment}>{`New btn: ${count}`}</button>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <Button label="Total no of count" />
    </>
  );
}

export default App;
