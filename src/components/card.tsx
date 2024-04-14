export const Card = () => {
  return (
    <div className="flex flex-col w-80 bg-gray-100 rounded-xl">
      <div>
        <img src="/35593.jpg" className="w-80 h-64 rounded-t-xl" />
      </div>
      <div className="p-4">
        <h1 className="text-2xl font-bold text-gray-900 ">Recipe name here </h1>
        <p className="text-gray-500 line-clamp-3">
          Recipe description here with is currently harcoded and is very lonk
          which can cover al least 2 lines and line clamp is three lines
        </p>
      </div>
      <div className="p-4">
        <button className="font-bold flex items-center text-xl bg-[#A34343] text-white px-6 py-2 rounded-lg">
          Go
        </button>
      </div>
    </div>
  );
};
