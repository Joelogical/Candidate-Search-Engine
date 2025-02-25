// Use environment variable
const GITHUB_TOKEN =
  "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";

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
    const response = await fetch(`https://api.github.com/users/${username}`, {
      headers: {
        Authorization: `token ${GITHUB_TOKEN}`,
        Accept: "application/vnd.github.v3+json",
      },
    });
    const data = await response.json();
    if (!response.ok) {
      throw new Error("invalid API response, check the network tab");
    }
    return data;
  } catch (err) {
    return {};
  }
};
