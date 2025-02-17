import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Option } from "./components/Option";

export function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex-grow flex flex-col items-center mt-24">
        <h2 className="font-bold text-2xl mb-8">Choose one:</h2>
        <Option />
      </div>
      <Footer />
    </div>
  );
}
