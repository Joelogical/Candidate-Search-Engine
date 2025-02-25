// Use environment variable
const GITHUB_TOKEN = import.meta.env.VITE_GITHUB_TOKEN;

export const searchGithub = async (query: string) => {
  try {
    const response = await fetch(
      `https://api.github.com/search/users?q=${query}`,
      {
        headers: {
          Authorization: `token ${GITHUB_TOKEN}`,
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
    console.log(
      "Making API request with token:",
      GITHUB_TOKEN?.slice(0, 8) + "..."
    );
    console.log("Making API request for user:", username);
    const response = await fetch(`https://api.github.com/users/${username}`, {
      headers: {
        Authorization: `token ${GITHUB_TOKEN}`,
        Accept: "application/vnd.github.v3+json",
      },
    });
    console.log("API Response status:", response.status);

    const data = await response.json();
    console.log("API Response data:", data);

    if (!response.ok) {
      console.error("API Error:", data.message);
      throw new Error(data.message || "invalid API response");
    }
    return data;
  } catch (err) {
    console.error("API Call failed:", err);
    return {};
  }
};
