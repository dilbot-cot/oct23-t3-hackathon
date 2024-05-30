import React from 'react';
import Card from 'react-bootstrap/Card';
import formatDateToAEST from './dateUtils';

export default function RepositoryCard ({ repo }) {
  return (
    <Card style={{ width: '18rem', backgroundColor: '#e0e1dd', borderColor: '#e0e1dd'}}>
      <Card.Body>
        <Card.Title style={{ color: '#e0e1dd'}}>{repo.name}</Card.Title>
        <Card.Subtitle style={{ paddingBottom: '.5rem', color: '#c1c3bb'}}>Created Date: {formatDateToAEST(repo.created_at)} AEST</Card.Subtitle>
        <Card.Subtitle style={{ paddingBottom: '.5rem', color: '#c1c3bb'}}>Last Updated: {formatDateToAEST(repo.updated_at)} AEST</Card.Subtitle>
        <Card.Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </Card.Text>
        <Card.Link href={repo.html_url} style={{color: '#e0e1dd'}}>Repo Link</Card.Link>
      </Card.Body>
    </Card>
  );
};