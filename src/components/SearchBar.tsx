export const SearchBar = ({ setQuery, setCategory, setActivateSearch }: any) => {
  const categories = [
    "Random",
    "Nature", 
    "People", 
    "Technology",
    "Animals", 
    "Sports"
  ];

  return (
    <div className="flex justify-center pb-20 pt-10 gap-5">
      <input
        type="text"
        placeholder="Search pictures..."
        className="w-96 p-3 rounded-md border-2 border-gray-200 cursor-pointer text-lg"
        onChange={(e) => setQuery(e.target.value)}
      />
      <button className="px-4 bg-gray-100 border-2 rounded-md hover:bg-gray-300 text-lg" onClick={() => setActivateSearch(true)}>
        Search
      </button>
      <select 
        className="pl-4 border-2 border-gray-200 rounded-md cursor-pointer text-lg" 
        onChange={(e) => {
          setCategory(e.target.value);
          setActivateSearch(true);
        }}
      >
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
  );
};
