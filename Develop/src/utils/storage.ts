import { GithubUser } from "../types/github";

const STORAGE_KEY = "savedCandidates";

export const getSavedCandidates = (): GithubUser[] => {
  const saved = localStorage.getItem(STORAGE_KEY);
  return saved ? JSON.parse(saved) : [];
};

export const saveCandidates = (candidates: GithubUser[]): void => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(candidates));
}; 