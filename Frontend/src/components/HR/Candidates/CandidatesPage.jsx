import { useState, useEffect, useCallback } from "react";
import axios from "axios";
import { useAuth } from "../../../Context/AuthContext";
import { API_BASE_URL } from "../../../Api/config";
import CandidatesTable from "./CandidatesTable";
import FilterTabs from "./FilterTabs";
import SearchBar from "./SearchBar";
import Pagination from "./Pagination";
import ViewModal from "./ViewModal";


export default function CandidatesPage() {
  const { authState } = useAuth();
  const [applications, setApplications] = useState([]); 
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState("All");
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [selected, setSelected] = useState(null);

  const perPage = 6;

  const fetchApplications = useCallback(async () => {
    try {
      setLoading(true);
      const response = await axios.get(`${API_BASE_URL}applications/`, {
        headers: { Authorization: `Bearer ${authState.accessToken}` },
      });
      
      // Aapka data "results" key ke andar hai, isliye results fetch kar rahe hain
      if (response.data && response.data.results) {
        setApplications(response.data.results);
      } else {
        setApplications(Array.isArray(response.data) ? response.data : []);
      }
      
    } catch (error) {
      console.error("Fetch Error:", error.response?.data || error.message);
      setApplications([]); 
    } finally {
      setLoading(false);
    }
  }, [authState.accessToken]);

  useEffect(() => {
    if (authState.accessToken) {
      fetchApplications();
    }
  }, [fetchApplications, authState.accessToken]);

  // Status mapping: Django status values ko filter ke saath match karna
  const filtered = (applications || []).filter((c) => {
    if (filter === "Shortlisted") return c.status === "shortlisted";
    if (filter === "Rejected") return c.status === "rejected";
    if (filter === "New") return c.status === "pending";
    return true;
  });

  const searched = filtered.filter((c) =>
    (c.applicant_name || "").toLowerCase().includes(search.toLowerCase()) ||
    (c.job_title || "").toLowerCase().includes(search.toLowerCase())
  );

  const totalPages = Math.ceil(searched.length / perPage);
  const paginated = searched.slice((page - 1) * perPage, page * perPage);

  return (
    <div className="p-4 bg-[#f5f6fa] min-h-screen border border-gray-200 rounded-xl mt-4">
      <div className="px-4">
        <h1 className="text-4xl font-semibold text-gray-800">Candidates</h1>
        <p className="text-lg text-gray-500 mb-4">Manage applicants with ease.</p>

        <div className="flex justify-between items-center mb-4">
          <FilterTabs filter={filter} setFilter={setFilter} />
          <SearchBar search={search} setSearch={setSearch} />
        </div>

        {loading ? (
          <div className="p-10 text-center font-medium">Loading Data...</div>
        ) : applications.length === 0 ? (
          <div className="p-10 text-center text-gray-500">No applications found.</div>
        ) : (
          <>
            <CandidatesTable data={paginated} setSelected={setSelected} />
            <Pagination page={page} setPage={setPage} total={totalPages} />
          </>
        )}

        {selected && (
          <ViewModal 
            data={selected} 
            onClose={() => setSelected(null)} 
            onUpdate={fetchApplications} 
          />
        )}
      </div>
    </div>
  );
}