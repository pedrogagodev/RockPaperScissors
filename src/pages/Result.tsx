import { useNavigate } from "react-router-dom";

import IconRock from "../assets/images/icon-rock.svg";
import IconPaper from "../assets/images/icon-paper.svg";
import IconScissors from "../assets/images/icon-scissors.svg";
import { useGameContext } from "../hooks/useGameContext";

export function Result() {
  const { dispatch } = useGameContext();

  const navigate = useNavigate();

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
        <img src={IconPaper} alt="" />
        <span>X</span>
        <img src={IconRock} alt="" />
      </div>
      <h2 className="text-xl">Player lose!</h2>
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
