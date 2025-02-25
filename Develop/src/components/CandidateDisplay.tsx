import { useState, useEffect } from "react";
import { searchGithubUser } from "../api/API";
import { GithubUser } from "../types/github";

interface CandidateDisplayProps {
  onSaveCandidate: (candidate: GithubUser) => void;
  savedCandidates: GithubUser[];
}

const CandidateDisplay = ({
  onSaveCandidate,
  savedCandidates,
}: CandidateDisplayProps) => {
  const [candidate, setCandidate] = useState<GithubUser | null>(null);
  const [noMoreCandidates, setNoMoreCandidates] = useState(false);

  const loadNextCandidate = async () => {
    const usernames = ["octocat", "defunkt", "mojombo", "pjhyett"];
    if (savedCandidates.length >= usernames.length) {
      setNoMoreCandidates(true);
      setCandidate(null);
      return;
    }

    const nextUser = await searchGithubUser(
      usernames[savedCandidates.length % usernames.length]
    );
    setCandidate(nextUser);
  };

  useEffect(() => {
    loadNextCandidate();
  }, []);

  const handleSaveCandidate = () => {
    if (candidate) {
      onSaveCandidate(candidate);
      loadNextCandidate();
    }
  };

  const handleSkipCandidate = () => {
    loadNextCandidate();
  };

  return (
    <div>
      {noMoreCandidates ? (
        <h2>No more candidates available to review!</h2>
      ) : (
        candidate && (
          <div>
            <img src={candidate.avatar_url} alt={candidate.name} />
            <h2>{candidate.name}</h2>
            <p>Username: {candidate.login}</p>
            <p>Location: {candidate.location}</p>
            <p>Email: {candidate.email}</p>
            <p>Company: {candidate.company}</p>
            <a href={candidate.html_url}>GitHub Profile</a>
            <div>
              <button onClick={handleSaveCandidate}>+</button>
              <button onClick={handleSkipCandidate}>-</button>
            </div>
          </div>
        )
      )}
    </div>
  );
};

export default CandidateDisplay;
