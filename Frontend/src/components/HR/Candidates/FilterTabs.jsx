export default function FilterTabs({ filter, setFilter }) {
  const tabs = ["All", "New", "Shortlisted", "Rejected"];

  return (
    <div className="flex gap-3">
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => setFilter(tab)}
          className={`px-3 py-1 text-sm rounded-full ${
            filter === tab
              ? "bg-purple-100 text-purple-600"
              : "text-gray-500"
          }`}
        >
          {tab}
        </button>
      ))}
    </div>
  );
}