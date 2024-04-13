export default function Card({ imagem, singer, category }) {
  return (
    <div className="h-48 w-40 bg-white/5 flex flex-col items-center justify-center rounded-sm">
      <img src={imagem} />
      <div className="flex flex-col self-start pl-2">
        <span className="font-bold opacity-90">{singer}</span>
        <span className="font-light">{category}</span>
      </div>
    </div>
  );
}
