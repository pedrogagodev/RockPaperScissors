import { useNavigate } from "react-router-dom";

import IconRock from "../assets/images/icon-rock.svg";
import IconPaper from "../assets/images/icon-paper.svg";
import IconScissors from "../assets/images/icon-scissors.svg";

import { useGameContext } from "../hooks/useGameContext";
import { useCallback, useEffect, useRef } from "react";

export function Result() {
  const { dispatch, state } = useGameContext();
  const { playerChoice, machineChoice, winner } = state;

  const navigate = useNavigate();
  const isResultAlreadyCalculated = useRef(false);

  const getResult = useCallback(() => {
    if (isResultAlreadyCalculated.current) return;

    isResultAlreadyCalculated.current = true;

    const isPlayerWins = {
      rock: "scissors",
      paper: "rock",
      scissors: "paper",
    };

    if (!playerChoice) {
      return null;
    }

    if (isPlayerWins[playerChoice] === machineChoice) {
      dispatch({
        type: "SET_WINNER",
        winner: "player",
      });
      dispatch({
        type: "INCREMENT_PLAYER_SCORE",
      });
    } else if (playerChoice === machineChoice) {
      dispatch({
        type: "SET_WINNER",
        winner: "draw",
      });
    } else {
      dispatch({
        type: "SET_WINNER",
        winner: "machine",
      });
      dispatch({
        type: "INCREMENT_MACHINE_SCORE",
      });
    }
  }, [dispatch, playerChoice, machineChoice]);

  useEffect(() => {
    if (!playerChoice || !machineChoice) {
      navigate("/");
    }

    getResult();
  }, [getResult, playerChoice, machineChoice, navigate]);

  const handleClickTryAgain = () => {
    dispatch({ type: "TRY_AGAIN" });
    navigate("/");
  };

  return (
    <div className="flex flex-col items-center justify-center mt-24 gap-2">
      <div className="flex gap-12 font-bold text-lg">
        <h2>Player</h2>
        <h2>Machine</h2>
      </div>
      <div className="flex gap-8">
        <img
          src={
            playerChoice === "rock"
              ? IconRock
              : playerChoice === "paper"
                ? IconPaper
                : IconScissors
          }
          alt={
            playerChoice === "rock"
              ? "Rock with hands"
              : playerChoice === "paper"
                ? "Paper with hands"
                : "Scissors with hands"
          }
        />
        <span>X</span>
        <img
          src={
            machineChoice === "rock"
              ? IconRock
              : machineChoice === "paper"
                ? IconPaper
                : IconScissors
          }
          alt={
            machineChoice === "rock"
              ? "Rock with hands"
              : machineChoice === "paper"
                ? "Paper with hands"
                : "Scissors with hands"
          }
        />
      </div>
      <h2 className="text-xl">
        {winner === "draw"
          ? "Draw!"
          : `${winner === "player" ? "Player" : "Machine"} Wins!`}
      </h2>
      <button
        type="button"
        className="hover:cursor-pointer bg-[#000B58] text-white rounded-md p-2"
        onClick={handleClickTryAgain}
      >
        Try again!
      </button>
    </div>
  );
}
