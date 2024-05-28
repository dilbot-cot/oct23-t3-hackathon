import React, { useEffect, useState } from 'react';
import '../styles/cardGenerator.css';
import RepositoryCard from '../functions/cardGenerator';
import fetchRepos from '../functions/gitHubAPI';

export default function GitHubRepos() {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    const getRepos = async () => {
      const repos = await fetchRepos();
      setRepos(repos);
    };

    getRepos();
  }, []);

  return (
    <div className='wrapper'>
      <div className='heading'>
          <h1>My GitHub Repositories</h1>
      </div>
      <div className='cards'>
          {repos.map(repo => <RepositoryCard key={repo.id} repo={repo} />)}
      </div>
    </div>
  );
};