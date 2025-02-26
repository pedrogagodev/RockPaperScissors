import { BrowserRouter } from "react-router-dom";
import { Router } from "./Router";
import { GameProvider } from "./contexts/GameContext";

export function App() {
  return (
    <GameProvider>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </GameProvider>
  );
}
