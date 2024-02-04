import { useState } from "react";
import TicTacToe from "./sandbox/ticTacToe/ticTacToe";
import Redux from "./sandbox/redux/redux";
import ServerComponents from "./sandbox/serverComponents/serverComponents";
import Mason from "./sandbox/mason/mason";

function App() {
  const [currentSandBox, setCurrentSandBox] = useState<string>("");
  const allSandboxes = [
    "home",
    "tictactoe",
    "mason-grid",
    "redux",
    "serverComponents",
  ];
  const phImg =
    "https://i.pinimg.com/564x/e3/cd/6e/e3cd6e8ad8e3e90a8263fbe68e915777.jpg";

  const loadSandbox = (sandbox: string) => {
    // prettier-ignore
    switch (sandbox) {
      case "tictactoe": return <TicTacToe />;
      case "redux": return <Redux />;
      case "serverComponents": return <ServerComponents />;
      case "mason-grid": return <Mason/>;
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
