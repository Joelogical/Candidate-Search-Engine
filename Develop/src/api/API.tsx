import { config } from "../config";

export const searchGithub = async (query: string) => {
  try {
    const response = await fetch(
      `${config.github.apiUrl}/search/users?q=${query}`,
      {
        headers: {
          Authorization: `token ${config.github.token}`,
          Accept: "application/vnd.github.v3+json",
        },
      }
    );
    const data = await response.json();
    if (!response.ok) {
      throw new Error("invalid API response, check the network tab");
    }
    return data;
  } catch (err) {
    return [];
  }
};

export const searchGithubUser = async (username: string) => {
  try {
    const response = await fetch(`${config.github.apiUrl}/users/${username}`, {
      headers: {
        Authorization: `token ${config.github.token}`,
        Accept: "application/vnd.github.v3+json",
      },
    });

    if (!response.ok) {
      throw new Error(`GitHub API error: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error("API Call Error:", error);
    return {};
  }
};
