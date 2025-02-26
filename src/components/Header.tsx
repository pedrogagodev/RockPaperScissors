import { useGameContext } from "../hooks/useGameContext";

export function Header() {
  const { state, dispatch } = useGameContext();
  const { playerScore, machineScore } = state;

  return (
    <div className="flex bg-[#000B58] justify-around text-white py-3 items-center">
      <h1 className="text-2xl">Rock Paper Scissors</h1>

      <div>
        <div className="border p-3 text-lg rounded-t-md">
          <h2 className="text-2xl mb-2">Score:</h2>
          <p>
            Player: <span>{playerScore}</span>
          </p>
          <p>
            Machine: <span>{machineScore}</span>
          </p>
        </div>
        <button
          type="button"
          className=" w-full border border-t-0 rounded-b-md p-2"
          onClick={() => {
            dispatch({ type: "RESET_SCORE" });
          }}
        >
          Reset
        </button>
      </div>
    </div>
  );
}
