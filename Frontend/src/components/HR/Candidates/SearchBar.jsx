import { Search } from "lucide-react";

export default function SearchBar({ search, setSearch }) {
  return (
    <div className="flex items-center bg-white border rounded-full px-3 py-1">
      <Search size={16} />
      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search by Appiled Jobs"
        className="outline-none px-2 text-mb w-100"
      />
    </div>
  );
}