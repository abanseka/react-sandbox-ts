import { useState } from "react";
import TicTacToe from "./sandbox/TicTacToe/TicTacToe";
import Redux from "./sandbox/Redux/Redux";
import ServerComponents from "./sandbox/serverComponents/ServerComponents";
import "./App.css";

function App() {
  const [currentSandBox, setCurrentSandBox] = useState<string>("");
  const allSandboxes = ["home", "tictactoe", "redux", "serverComponents"];
  const phImg =
    "https://i.pinimg.com/564x/e3/cd/6e/e3cd6e8ad8e3e90a8263fbe68e915777.jpg";

  const loadSandbox = (sandbox: string) => {
    // prettier-ignore
    switch (sandbox) {
      case "tictactoe": return <TicTacToe />;
      case "redux": return <Redux />;
      case "serverComponents": return <ServerComponents />;
      default: return <img 
        src={phImg}
        alt="home img"
        style={{maxWidth:300,borderRadius:1000}}
      />
    }
  };

  return (
    <>
      <div className="sandboxWrapper">
        {allSandboxes.map((sandboxName: string, idx: number) => (
          <button key={idx} onClick={() => setCurrentSandBox(sandboxName)}>
            {sandboxName}
          </button>
        ))}
      </div>
      <div style={{ margin: 20 }}>{loadSandbox(currentSandBox)}</div>
    </>
  );
}

export default App;
