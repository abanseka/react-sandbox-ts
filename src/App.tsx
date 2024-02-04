import { useState } from "react";
import TicTacToe from "./sandbox/ticTacToe/ticTacToe";
import Redux from "./sandbox/redux/redux";
import ServerComponents from "./sandbox/serverComponents/serverComponents";
import Mason from "./sandbox/mason/mason";
import ProseMirror from "./sandbox/proseMirror/proseMirror";

function App() {
  const [currentSandBox, setCurrentSandBox] = useState<string>("");
  const allSandboxes = [
    "home",
    "tictactoe",
    "mason grid",
    "redux",
    "md editor",
    "server components",
  ];
  const phImg =
    "https://i.pinimg.com/564x/e3/cd/6e/e3cd6e8ad8e3e90a8263fbe68e915777.jpg";

  const loadSandbox = (sandbox: string) => {
    // prettier-ignore
    switch (sandbox) {
      case "tictactoe": return <TicTacToe />;
      case "redux": return <Redux />;
      case "server components": return <ServerComponents />;
      case "mason grid": return <Mason/>;
      case "md editor": return <ProseMirror/>;
      default: return <img 
        src={phImg}
        alt="home img"
        style={{maxWidth:300,borderRadius:1000}}
      />
    }
  };

  return (
    <main>
      <nav style={{ display: "grid", gap: 10 }}>
        {allSandboxes.map((sandboxName: string, idx: number) => (
          <button key={idx} onClick={() => setCurrentSandBox(sandboxName)}>
            {sandboxName}
          </button>
        ))}
      </nav>

      <section id="sandbox" style={{ display: "grid", placeItems: "center" }}>
        {loadSandbox(currentSandBox)}
      </section>
    </main>
  );
}

export default App;
