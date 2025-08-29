import { useState, useEffect } from "react";
import { getMovies } from "../../services/movies.service"; // adjust path

function MovieSearch({ onResults }) {
  const [term, setTerm] = useState("");
  const [debouncedTerm, setDebouncedTerm] = useState(term);
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState("");

  // Debounce typing
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedTerm(term.trim());
    }, 500);

    return () => clearTimeout(handler);
  }, [term]);

  // Fetch when debouncedTerm changes
  useEffect(() => {
    if (!debouncedTerm) {
      onResults([]); // clear results if input is empty
      return;
    }

    setLoading(true);
    setErr("");

    getMovies(debouncedTerm, (data) => {
      setLoading(false);

      if (data?.Response === "True") {
        onResults([data]); // pass results to parent
      } else {
        setErr(data?.Error || "Movie not found.");
        onResults([]);
      }
    });
  }, [debouncedTerm, onResults]);

  return (
    <div className="w-full max-w-xl mx-auto">
      <div className="flex items-stretch gap-2">
        <div className="flex-1 relative">
          <input
            type="text"
            value={term}
            onChange={(e) => setTerm(e.target.value)}
            placeholder="Search movie title…"
            className="w-full rounded-xl border border-gray-300 px-4 py-2 pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {term && (
            <button
              type="button"
              onClick={() => setTerm("")}
              className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
              aria-label="Clear"
            >
              ×
            </button>
          )}
        </div>
      </div>

      {loading && <p className="mt-2 text-sm text-blue-600">Searching…</p>}
      {err && <p className="mt-2 text-sm text-red-600">{err}</p>}
    </div>
  );
}

export default MovieSearch;
