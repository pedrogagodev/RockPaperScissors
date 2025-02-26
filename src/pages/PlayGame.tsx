import { useNavigate } from "react-router-dom";
import { Option } from "../components/Option";
import { useGameContext } from "../hooks/useGameContext";
import type { GameOption } from "../types/GameOption";
export function PlayGame() {
  const navigate = useNavigate();
  const { dispatch } = useGameContext();

  const handlePlayerChoice = (option: GameOption) => {
    dispatch({
      type: "SET_PLAYER_CHOICE",
      option,
    });

    generateMachineChoice();

    navigate("/result");
  };

  function generateMachineChoice() {
    const options: GameOption[] = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * options.length);
    const randomMachineChoice = options[randomIndex];
    dispatch({
      type: "SET_MACHINE_CHOICE",
      option: randomMachineChoice,
    });
  }
  return (
    <div className="flex-grow flex flex-col items-center mt-24">
      <h2 className="font-bold text-2xl mb-8">Choose one:</h2>
      <Option setPlayerChoice={handlePlayerChoice} />
    </div>
  );
}
