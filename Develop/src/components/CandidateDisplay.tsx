import { useState, useEffect, useCallback } from "react";
import { searchGithubUser, getHeaders } from "../api/API";
import { GithubUser } from "../types/github";

interface CandidateDisplayProps {
  onSaveCandidate: (candidate: GithubUser) => void;
  savedCandidates: GithubUser[];
}

const CandidateDisplay = ({
  onSaveCandidate,
  savedCandidates,
}: CandidateDisplayProps) => {
  console.log("CandidateDisplay mounting");
  const [candidate, setCandidate] = useState<GithubUser | null>(null);
  const [noMoreCandidates, setNoMoreCandidates] = useState(false);
  const [loading, setLoading] = useState(true);

  const loadNextCandidate = useCallback(async () => {
    console.log("Loading next candidate...");
    const usernames: string[] = ["octocat", "defunkt", "mojombo", "pjhyett"];
    if (savedCandidates.length >= usernames.length) {
      setNoMoreCandidates(true);
      setCandidate(null);
      return;
    }

    try {
      setLoading(true);
      const nextUsername = usernames[savedCandidates.length % usernames.length];
      console.log("Attempting API call with headers:", getHeaders());
      const nextUser = await searchGithubUser(nextUsername);
      if (!nextUser || Object.keys(nextUser as object).length === 0) {
        console.error("API call returned empty user - likely auth failure");
      }
      setCandidate(nextUser);
    } catch (error) {
      console.error("Error in loadNextCandidate:", error);
    } finally {
      setLoading(false);
    }
  }, [savedCandidates]);

  useEffect(() => {
    console.log("CandidateDisplay mounted");
    void loadNextCandidate();
  }, [loadNextCandidate]);

  const handleSaveCandidate = () => {
    if (candidate) {
      onSaveCandidate(candidate);
      void loadNextCandidate();
    }
  };

  const handleSkipCandidate = () => {
    void loadNextCandidate();
  };

  return (
    <div>
      {loading ? (
        <h2>Loading...</h2>
      ) : noMoreCandidates ? (
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
