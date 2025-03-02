import { createContext, useCallback, useReducer, useState } from "react";
import type { GameState, GameAction } from "../types/GameContextAction";
import type { GameOption } from "../types/GameOption";
import { toast } from "sonner";

type GameContextType = {
  state: GameState;
  dispatch: React.Dispatch<GameAction>;
  setPlayerChoice: (playerChoice: GameOption) => void;
  checkPlayerChoice: (playerChoice: GameOption) => boolean;
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

    case "RESET_SCORE":
      return {
        ...state,
        playerScore: 0,
        machineScore: 0,
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
  const [lastPlayerChoice, setLastPlayerChoice] = useState<null | GameOption>(
    null
  );

  const checkPlayerChoice = useCallback(
    (playerChoice: GameOption) => {
      if (lastPlayerChoice === "rock" && playerChoice === "rock") {
        toast.error("You cannot choose rock twice in a row!");
        return false;
      }
      return true;
    },
    [lastPlayerChoice]
  );

  const setPlayerChoice = useCallback((playerChoice: GameOption) => {
    dispatch({ type: "SET_PLAYER_CHOICE", option: playerChoice });
    setLastPlayerChoice(playerChoice);
  }, []);

  return (
    <GameContext.Provider
      value={{ state, dispatch, setPlayerChoice, checkPlayerChoice }}
    >
      {children}
    </GameContext.Provider>
  );
}
