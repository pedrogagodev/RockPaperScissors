import { useNavigate } from "react-router-dom";
import { Option } from "../components/Option";
import { useGameContext } from "../hooks/useGameContext";
import { Toaster } from "sonner";
import type { GameOption } from "../types/GameOption";
export function PlayGame() {
  const navigate = useNavigate();
  const { setPlayerChoice, checkPlayerChoice, dispatch } = useGameContext();

  const handlePlayerChoice = (playerOption: GameOption) => {
    if (playerOption) {
      const isValidChoice = checkPlayerChoice(playerOption);

      if (!isValidChoice) {
        return;
      }

      setPlayerChoice(playerOption);
      generateMachineChoice();
      navigate("/result");
    }
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
      <Toaster
        position="top-center"
        toastOptions={{
          style: {
            background: " #ca2525 ",
          },
        }}
      />
      <h2 className="font-bold text-2xl mb-8">Choose one:</h2>
      <Option setPlayerChoice={handlePlayerChoice} />
    </div>
  );
}
