import axios from 'axios';

export const searchIssues = async (query) => {
  const res = await axios.get(
    `https://api.github.com/search/issues?q=${query}`,
    {
      headers: {
        Authorization: `token ${process.env.GITHUB_TOKEN}`,
      },
    },
  );
  return res.data.items;
};
