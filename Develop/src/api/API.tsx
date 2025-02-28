import { GithubUser } from "../types/github";

export const getHeaders = () => {
  // Format: username:token
  const token = "Joelogical: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";
  return {
    Authorization: `Basic ${btoa(token)}`, // Use Basic auth with base64 encoding
    Accept: "application/vnd.github.v3+json",
  };
};

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
): Promise<GithubUser> => {
  try {
    const response = await fetch(`https://api.github.com/users/${username}`, {
      headers: getHeaders(),
    });

    // Add detailed error logging
    if (!response.ok) {
      const errorData = await response.json();
      console.error("GitHub API Error:", {
        status: response.status,
        statusText: response.statusText,
        headers: getHeaders(),
        error: errorData,
      });
      throw new Error(`GitHub API error: ${response.status}`);
    }

    const data = (await response.json()) as GithubUser;
    return data;
  } catch (err) {
    console.error("API Call Failed:", err);
    return {} as GithubUser;
  }
};
