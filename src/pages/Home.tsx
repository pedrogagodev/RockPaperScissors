import { Option } from "../components/Option";

export function Home() {
  return (
    <div className="flex-grow flex flex-col items-center mt-24">
      <h2 className="font-bold text-2xl mb-8">Choose one:</h2>
      <Option />
    </div>
  );
}
