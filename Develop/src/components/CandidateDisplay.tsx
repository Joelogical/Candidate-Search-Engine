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
  console.log("CandidateDisplay mounting");
  const [candidate, setCandidate] = useState<GithubUser | null>(null);
  const [noMoreCandidates, setNoMoreCandidates] = useState(false);
  const [loading, setLoading] = useState(true);

  const loadNextCandidate = async () => {
    console.log("Loading next candidate...");
    const usernames = ["octocat", "defunkt", "mojombo", "pjhyett"];
    if (savedCandidates.length >= usernames.length) {
      setNoMoreCandidates(true);
      setCandidate(null);
      return;
    }

    try {
      setLoading(true);
      console.log(
        "Fetching user:",
        usernames[savedCandidates.length % usernames.length]
      );
      const nextUser = await searchGithubUser(
        usernames[savedCandidates.length % usernames.length]
      );
      console.log("Received user data:", nextUser);
      setCandidate(nextUser);
    } catch (error) {
      console.error("Error loading candidate:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    console.log("CandidateDisplay mounted");
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
