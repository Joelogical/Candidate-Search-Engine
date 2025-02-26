import { GithubUser } from "../types/github";
import { getSavedCandidates } from "../utils/storage";
import { useEffect, useState } from "react";

const SavedCandidates = () => {
  const [savedCandidates, setSavedCandidates] = useState<GithubUser[]>([]);

  useEffect(() => {
    setSavedCandidates(getSavedCandidates());
  }, []);

  return (
    <div>
      <h1>Saved Candidates</h1>
      {savedCandidates.length === 0 ? (
        <h2>No candidates have been accepted yet!</h2>
      ) : (
        <div>
          {savedCandidates.map((candidate) => (
            <div key={candidate.login}>
              <img src={candidate.avatar_url} alt={candidate.name} />
              <h2>{candidate.name}</h2>
              <p>Username: {candidate.login}</p>
              <p>Location: {candidate.location}</p>
              <p>Email: {candidate.email}</p>
              <p>Company: {candidate.company}</p>
              <a href={candidate.html_url}>GitHub Profile</a>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SavedCandidates;
