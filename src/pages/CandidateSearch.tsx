import { useState, useEffect } from 'react';
import { searchGithub, searchGithubUser } from '../api/API';

interface GithubUser {
  name: string;
  login: string;
  location: string;
  avatar_url: string;
  email: string;
  html_url: string;
  company: string;
}

const CandidateSearch = () => {
  const [candidate, setCandidate] = useState<GithubUser | null>(null);

  useEffect(() => {
    const loadInitialCandidate = async () => {
      const user = await searchGithubUser('octocat'); // Default candidate
      setCandidate(user);
    };
    loadInitialCandidate();
  }, []);

  return (
    <div>
      {candidate && (
        <div>
          <img src={candidate.avatar_url} alt={candidate.name} />
          <h2>{candidate.name}</h2>
          <p>Username: {candidate.login}</p>
          <p>Location: {candidate.location}</p>
          <p>Email: {candidate.email}</p>
          <p>Company: {candidate.company}</p>
          <a href={candidate.html_url}>GitHub Profile</a>
        </div>
      )}
    </div>
  );
};

export default CandidateSearch; 