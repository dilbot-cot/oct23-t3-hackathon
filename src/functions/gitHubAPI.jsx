import { Octokit } from '@octokit/core';

export default async function fetchRepos () {
  const token = import.meta.env.VITE_GITHUB_TOKEN;
  if (!token) {
    console.error('GitHub token is not defined');
    return [];
  }

  try {
    const octokit = new Octokit({
      auth: token,
    });

    const response = await octokit.request('GET /users/dilbot-cot/repos', {
      headers: {
        'X-GitHub-Api-Version': '2022-11-28',
      },
      sort: 'updated'
    });

    return response.data;
  } catch (error) {
    console.error('Error fetching repositories:', error);
    return [];
  }
};