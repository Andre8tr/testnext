const Tarjeta = ({ titulo, descripcion }: { titulo: string; descripcion: string }) => {
  return (
    <div className="border p-4 rounded-lg shadow-md bg-white">
      <h2 className="text-xl font-bold">{titulo}</h2>
      <p className="text-gray-600">{descripcion}</p>
    </div>
  );
};

export default Tarjeta;
