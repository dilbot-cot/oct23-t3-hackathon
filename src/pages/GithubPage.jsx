import React, { useEffect, useState } from 'react';
import { Octokit } from '@octokit/core';
import Card from 'react-bootstrap/Card';

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
    <div className='wrapper'>
        <h1>My GitHub Repositories</h1>

        {repos.map((repo) => {
          return (
            <Card style={{width: '18rem'}}>
              <Card.Body>
                <Card.Title>{repo.name}</Card.Title>
                <Card.Subtitle className='mb-2 text-muted'>Created Date: {repo.created_at}</Card.Subtitle>
                <Card.Text>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid dolores facilis quam tempora id et fugit maiores maxime animi nam, ducimus provident a natus ipsam nobis neque magnam, dolorem impedit?
                </Card.Text>
                <Card.Link href={repo.html_url}>Repo Link</Card.Link>
              </Card.Body>
            </Card>
          )
        })}
    </div>
  );
};

export default GitHubRepos;