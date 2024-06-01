import React, { useEffect, useState } from 'react';
import '../styles/cardGenerator.css';
import RepositoryCard from '../functions/cardGenerator';
import fetchRepos from '../functions/gitHubAPI';
import { ButtonGroup, ToggleButton } from 'react-bootstrap';

export default function GitHubRepos() {
  const [repos, setRepos] = useState([]);
  const [sortType, setSortType] = useState('updated')

  useEffect(() => {
    const getRepos = async () => {
      const repos = await fetchRepos(sortType);
      setRepos(repos);
      console.log(repos)
    };

    getRepos();
  }, [sortType]);

  const [radioValue, setRadioValue] = useState('updated')

  const radios = [
    {name: 'Created Date', value: 'created'},
    {name: 'Updated Date', value: 'updated'}
  ]

  const handleSortChange = (newValue) => {
    setRadioValue(newValue);
    setSortType(newValue)
  }

  return (
    <div className='wrapper'>
      <div className='heading'>
          <h1>My GitHub Repositories</h1>
          <ButtonGroup>
            {radios.map((radio, idx) => (
              <ToggleButton
                key={idx}
                id={`radio-${idx}`}
                type="radio"
                variant={idx % 2 ? 'outline-danger' : 'outline-success'}
                name="radio"
                value={radio.value}
                checked={radioValue === radio.value}
                onChange={(e) => handleSortChange(e.currentTarget.value)}
                >
                {radio.name}
                </ToggleButton>
        ))}
      </ButtonGroup>
      </div>
      <div className='cards'>
          {repos.map(repo => <RepositoryCard key={repo.id} repo={repo} />)}
      </div>
    </div>
  );
};