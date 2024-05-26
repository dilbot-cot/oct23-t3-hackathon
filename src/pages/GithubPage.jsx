import React, { useEffect, useState } from 'react';
import { Octokit } from '@octokit/core';

const GitHubRepos = () => {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    const fetchRepos = async () => {
      const token = import.meta.env.VITE_GITHUB_TOKEN;
      if (!token) {
        console.error('GitHub token is not defined');
        return;
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

        setRepos(response.data);
      } catch (error) {
        console.error('Error fetching repositories:', error);
      }
    };

    fetchRepos();
  }, []);

  return (
    <div>
      <h1>My GitHub Repositories</h1>
      <ul>
        {repos.map((repo) => (
          <li key={repo.id}>{repo.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default GitHubRepos;