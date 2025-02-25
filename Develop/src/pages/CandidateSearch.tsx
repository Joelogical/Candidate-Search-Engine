/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react";
import CandidateDisplay from "../components/CandidateDisplay";
import { GithubUser } from "../types/github";

const CandidateSearch = () => {
  const [savedCandidates, setSavedCandidates] = useState<GithubUser[]>([]);

  const handleSaveCandidate = (candidate: GithubUser) => {
    setSavedCandidates([...savedCandidates, candidate]);
  };

  return (
    <div>
      <CandidateDisplay
        onSaveCandidate={handleSaveCandidate}
        savedCandidates={savedCandidates}
      />
    </div>
  );
};

export default CandidateSearch;
