function SearchStudent({ setSearch }) {
  return (
    <div className="flex justify-center mb-4">
      <input
        className="w-full max-w-md p-2 rounded bg-gray-800 outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="🔍 Search student by name..."
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
}

export default SearchStudent;