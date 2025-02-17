import { useState } from "react";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Option } from "./components/Option";
import { RulesModal } from "./components/RulesModal";

export function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <RulesModal isModalOpen={isModalOpen} onModalClose={handleModalClose} />
      <div className="flex-grow flex flex-col items-center mt-24">
        <h2 className="font-bold text-2xl mb-8">Choose one:</h2>
        <Option />
      </div>
      <Footer onModalOpen={handleModalOpen} />
    </div>
  );
}
