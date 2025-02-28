import { GithubUser } from "../types/github";

const GITHUB_TOKEN = import.meta.env.VITE_GITHUB_TOKEN as string;

// Add debug log to check if token is loaded
console.log("Token loaded:", GITHUB_TOKEN ? "Yes" : "No");

export const getHeaders = () => ({
  Authorization: `Bearer ${GITHUB_TOKEN}`,
  Accept: "application/vnd.github.v3+json",
  "X-GitHub-Api-Version": "2022-11-28",
});

export const searchGithub = async (): Promise<GithubUser[]> => {
  try {
    const start = Math.floor(Math.random() * 100000000) + 1;
    const response = await fetch(
      `https://api.github.com/users?since=${start}`,
      { headers: getHeaders() }
    );
    const data = (await response.json()) as GithubUser[];
    if (!response.ok) {
      throw new Error("invalid API response, check the network tab");
    }
    return data;
  } catch (err) {
    return [];
  }
};

export const searchGithubUser = async (
  username: string
): Promise<GithubUser | null> => {
  try {
    const response = await fetch(`https://api.github.com/users/${username}`, {
      headers: getHeaders(),
    });

    if (!response.ok) {
      throw new Error(`GitHub API error: ${response.status}`);
    }

    const data = (await response.json()) as GithubUser;
    return data;
  } catch (error) {
    console.error("API Call Failed:", error);
    return null;
  }
};
