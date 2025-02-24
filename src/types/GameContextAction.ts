import type { GameOption } from "./GameOption";

export type GameAction = {
  type: "SET_PLAYER_CHOICE" | "SET_MACHINE_CHOICE";
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
