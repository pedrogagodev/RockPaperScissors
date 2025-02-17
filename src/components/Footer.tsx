interface FooterProps {
  onModalOpen: () => void;
}
export function Footer({ onModalOpen }: FooterProps) {
  return (
    <div className="bg-[#000B58] text-white flex flex-col items-center py-1 gap-2">
      <button
        type="button"
        onClick={onModalOpen}
        className="border p-2 rounded-lg mt-2 bg-amber-50 text-black font-bold hover:cursor-pointer"
      >
        View Rules
      </button>
      <h3>
        Developed by{" "}
        <a
          href="https://github.com/pedrogagodev"
          className="hover:cursor-pointer text-amber-100 font-medium"
        >
          Pedro Oliveira
        </a>
      </h3>
    </div>
  );
}
