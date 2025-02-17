import IconRock from "../assets/images/icon-rock.svg";
import IconPaper from "../assets/images/icon-paper.svg";
import IconScissors from "../assets/images/icon-scissors.svg";

export function Option() {
  return (
    <div className="flex gap-10">
      <button type="button" className="hover:cursor-pointer">
        <img src={IconRock} alt="Rock hand" />
      </button>
      <button type="button" className="hover:cursor-pointer">
        <img src={IconPaper} alt="Paper hand" />
      </button>
      <button type="button" className="hover:cursor-pointer">
        <img src={IconScissors} alt="Scissors hand" />
      </button>
    </div>
  );
}
