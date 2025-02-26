/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState, useEffect } from "react";
import CandidateDisplay from "../components/CandidateDisplay";
import { GithubUser } from "../types/github";
import { getSavedCandidates, saveCandidates } from "../utils/storage";

const CandidateSearch = () => {
  console.log("CandidateSearch mounting");
  const [savedCandidates, setSavedCandidates] = useState<GithubUser[]>([]);

  useEffect(() => {
    setSavedCandidates(getSavedCandidates());
  }, []);

  const handleSaveCandidate = (candidate: GithubUser) => {
    const newSaved = [...savedCandidates, candidate];
    setSavedCandidates(newSaved);
    saveCandidates(newSaved);
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
