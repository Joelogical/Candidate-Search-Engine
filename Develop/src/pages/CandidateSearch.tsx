/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react";
// @ts-expect-error - Will be used later
import { searchGithub, searchGithubUser } from "../api/API";
import CandidateDisplay from "../components/CandidateDisplay";
import { GithubUser } from "../types/github";

const CandidateSearch = () => {
  const [savedCandidates, setSavedCandidates] = useState<GithubUser[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<GithubUser[]>([]);

  const handleSearch = async () => {
    const results = await searchGithub(searchQuery);
    setSearchResults(results.items || []);
  };

  const handleSaveCandidate = (candidate: GithubUser) => {
    setSavedCandidates([...savedCandidates, candidate]);
  };

  return (
    <div>
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
      <CandidateDisplay
        onSaveCandidate={handleSaveCandidate}
        savedCandidates={savedCandidates}
        searchResults={searchResults}
      />
    </div>
  );
};

export default CandidateSearch;
