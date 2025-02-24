import IconRock from "../assets/images/icon-rock.svg";
import IconPaper from "../assets/images/icon-paper.svg";
import IconScissors from "../assets/images/icon-scissors.svg";
import type { GameOption } from "../types/GameOption";

type OptionType = {
  setPlayerChoice: (option: GameOption) => void;
};
export function Option({ setPlayerChoice }: OptionType) {
  return (
    <div className="flex gap-10">
      <button
        type="button"
        className="hover:cursor-pointer"
        onClick={() => setPlayerChoice("rock")}
      >
        <img src={IconRock} alt="Rock hand" />
      </button>
      <button
        type="button"
        className="hover:cursor-pointer"
        onClick={() => setPlayerChoice("paper")}
      >
        <img src={IconPaper} alt="Paper hand" />
      </button>
      <button
        type="button"
        className="hover:cursor-pointer"
        onClick={() => setPlayerChoice("scissors")}
      >
        <img src={IconScissors} alt="Scissors hand" />
      </button>
    </div>
  );
}
