import { X } from "lucide-react";

interface RulesModalProps {
  shouldRender: boolean;
  onClose: () => void;
}

export function RulesModal({ shouldRender, onClose }: RulesModalProps) {
  if (!shouldRender) return null;

  return (
    <div className="bg-black/60 fixed inset-0 grid place-content-center text-black">
      <div className="bg-white flex flex-col justify-center items-center gap-8 p-2 rounded-lg">
        <div className="relative flex">
          <h2 className="text-xl font-bold">
            Rules: <span className="ml-2 text-2xl">⚠️</span>
          </h2>
          <button
            type="button"
            onClick={onClose}
            className="absolute left-[215px] hover:cursor-pointer"
          >
            <X />
          </button>
        </div>

        <ul className="flex flex-col gap-1 bg-indigo-200 rounded-lg p-2">
          <li> - Rock wins against Scissors.</li>
          <li> - Paper wins against Rock.</li>
          <li> - Scissors wins against Paper.</li>
          <li> - If both players select the same option, it's a draw.</li>
          <li className="font-bold">
            **It's not permitted to select rock twice in a row.**
          </li>
        </ul>
      </div>
    </div>
  );
}
