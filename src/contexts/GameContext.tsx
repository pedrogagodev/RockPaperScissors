import { createContext, useReducer } from "react";
import type { GameState, GameAction } from "../types/GameContextAction";

type GameContextType = {
  state: GameState;
  dispatch: React.Dispatch<GameAction>;
};

export const GameContext = createContext({} as GameContextType);

function reducer(state: GameState, action: GameAction): GameState {
  switch (action.type) {
    case "SET_PLAYER_CHOICE":
      return {
        ...state,
        playerChoice: action.option ?? null,
      };

    case "SET_MACHINE_CHOICE":
      return {
        ...state,
        machineChoice: action.option ?? null,
      };

    case "SET_WINNER":
      return {
        ...state,
        winner: action.winner,
      };

    case "INCREMENT_PLAYER_SCORE":
      return {
        ...state,
        playerScore: state.playerScore + 1,
      };
    case "INCREMENT_MACHINE_SCORE":
      return {
        ...state,
        machineScore: state.machineScore + 1,
      };

    case "TRY_AGAIN":
      return {
        ...state,
        machineChoice: null,
        playerChoice: null,
        winner: null,
      };
  }
}

const initialGameState: GameState = {
  playerScore: 0,
  machineScore: 0,
  playerChoice: null,
  machineChoice: null,
  winner: null,
};

export function GameProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(reducer, initialGameState);
  return (
    <GameContext.Provider value={{ state, dispatch }}>
      {children}
    </GameContext.Provider>
  );
}
