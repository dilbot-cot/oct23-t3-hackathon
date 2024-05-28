import React from 'react';
import Card from 'react-bootstrap/Card';
import formatDateToAEST from './dateUtils';

export default function RepositoryCard ({ repo }) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>{repo.name}</Card.Title>
        <Card.Subtitle className='mb-2 text-muted'>Created Date: {formatDateToAEST(repo.created_at)} AEST</Card.Subtitle>
        <Card.Subtitle className='mb-2 text-muted'>Last Updated: {formatDateToAEST(repo.updated_at)} AEST</Card.Subtitle>
        <Card.Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </Card.Text>
        <Card.Link href={repo.html_url}>Repo Link</Card.Link>
      </Card.Body>
    </Card>
  );
};