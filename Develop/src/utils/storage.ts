import { GithubUser } from "../types/github";

export const getSavedCandidates = (): GithubUser[] => {
  const saved = localStorage.getItem("savedCandidates");
  return saved ? JSON.parse(saved) : [];
};

export const saveCandidates = (candidates: GithubUser[]) => {
  localStorage.setItem("savedCandidates", JSON.stringify(candidates));
}; 