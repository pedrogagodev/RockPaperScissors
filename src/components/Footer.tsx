export function Footer() {
  return (
    <div className="bg-[#000B58] text-white flex flex-col items-center py-1 gap-2">
      <button type="button" className="border p-2 rounded-lg mt-2 bg-amber-50 text-black font-bold">View Rules</button>
      <h3>
        Developed by{" "}
        <a href="https://github.com/pedrogagodev">Pedro Oliveira</a>
      </h3>
    </div>
  );
}
