import React from "react";
import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight } from "lucide-react";

export default function Pagination({ page, setPage, total }) {
  const maxVisible = 3;

  // ================= PAGE WINDOW =================
  const getPages = () => {
    const pages = [];

    let start = Math.max(1, page - 1);
    let end = start + maxVisible - 1;

    if (end > total) {
      end = total;
      start = Math.max(1, end - maxVisible + 1);
    }

    for (let i = start; i <= end; i++) {
      pages.push(i);
    }

    return pages;
  };

  const pages = getPages();

  // ================= NAV HANDLERS =================
  const goPrev = () => {
    if (page > 1) setPage(page - 1);
  };

  const goNext = () => {
    if (page < total) setPage(page + 1);
  };

  const goFirst = () => setPage(1);
  const goLast = () => setPage(total);

  return (
    <div className="flex items-center justify-end gap-2 mt-5">

      {/* FIRST PAGE */}
      <button
        onClick={goFirst}
        disabled={page === 1}
        className={`p-2 rounded-lg border transition ${
          page === 1
            ? "bg-gray-100 text-gray-300 cursor-not-allowed"
            : "bg-white hover:bg-gray-100"
        }`}
      >
        <ChevronsLeft size={18} />
      </button>

      {/* PREV */}
      <button
        onClick={goPrev}
        disabled={page === 1}
        className={`p-2 rounded-lg border transition ${
          page === 1
            ? "bg-gray-100 text-gray-300 cursor-not-allowed"
            : "bg-white hover:bg-gray-100"
        }`}
      >
        <ChevronLeft size={18} />
      </button>

      {/* FIRST PAGE DOTS */}
      {pages[0] > 1 && (
        <>
          <button
            onClick={() => setPage(1)}
            className="px-3 py-1 rounded-lg bg-gray-100 hover:bg-gray-200 text-sm"
          >
            1
          </button>
          <span className="px-1 text-gray-400">...</span>
        </>
      )}

      {/* PAGE NUMBERS */}
      {pages.map((p) => (
        <button
          key={p}
          onClick={() => setPage(p)}
          className={`px-3 py-1 rounded-lg text-sm border transition ${
            page === p
              ? "bg-purple-500 text-white border-purple-500"
              : "bg-white hover:bg-gray-100"
          }`}
        >
          {p}
        </button>
      ))}

      {/* LAST PAGE DOTS */}
      {pages[pages.length - 1] < total && (
        <>
          <span className="px-1 text-gray-400">...</span>
          <button
            onClick={() => setPage(total)}
            className="px-3 py-1 rounded-lg bg-gray-100 hover:bg-gray-200 text-sm"
          >
            {total}
          </button>
        </>
      )}

      {/* NEXT */}
      <button
        onClick={goNext}
        disabled={page === total}
        className={`p-2 rounded-lg border transition ${
          page === total
            ? "bg-gray-100 text-gray-300 cursor-not-allowed"
            : "bg-white hover:bg-gray-100"
        }`}
      >
        <ChevronRight size={18} />
      </button>

      {/* LAST PAGE */}
      <button
        onClick={goLast}
        disabled={page === total}
        className={`p-2 rounded-lg border transition ${
          page === total
            ? "bg-gray-100 text-gray-300 cursor-not-allowed"
            : "bg-white hover:bg-gray-100"
        }`}
      >
        <ChevronsRight size={18} />
      </button>
    </div>
  );
}