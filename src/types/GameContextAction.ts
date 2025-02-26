import type { GameOption } from "./GameOption";

export type GameAction = {
  type:
    | "SET_PLAYER_CHOICE"
    | "SET_MACHINE_CHOICE"
    | "SET_WINNER"
    | "INCREMENT_PLAYER_SCORE"
    | "INCREMENT_MACHINE_SCORE"
    | "TRY_AGAIN" 
    | "RESET_SCORE";
  option?: GameOption;
  winner?: "player" | "machine" | "draw";
};

export type GameState = {
  playerScore: number;
  machineScore: number;
  playerChoice: GameOption | null;
  machineChoice: GameOption | null;
  winner?: "player" | "machine" | "draw" | null;
};
