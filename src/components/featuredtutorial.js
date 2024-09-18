// src/components/featuredtutorials.js
import React from 'react';
import { Card, Icon, Image } from 'semantic-ui-react';

const tutorialContent = [
  {
    title: 'Intro to JS6',
    description: 'Learn the fundamentals of JS6 and how to apply them in your projects.',
    username: 'js_master',
    rating: 5
  },
  {
    title: 'React Router Essentials',
    description: 'A guide to using React Router for client-side routing in your web applications.',
    username: 'react_guru',
    rating: 5
  },
  {
    title: 'Express and NodeJS',
    description: 'A tutorial on setting up a basic server using Express and NodeJS.',
    username: 'node_ninja',
    rating: 4.9
  }
];

const Tutorials = () => (
  <div className="featured-section">
    <h2>Featured Tutorials</h2>
    <div className="card-group">
      {tutorialContent.map((tutorial, index) => (
        <Card key={index}>
          <Image src={`https://picsum.photos/200?random=${index + 3}`} wrapped ui={false} />
          <Card.Content>
            <Card.Header>{tutorial.title}</Card.Header>
            <Card.Meta>
              <span className="date">Rating: {tutorial.rating}</span>
            </Card.Meta>
            <Card.Description>{tutorial.description}</Card.Description>
          </Card.Content>
          <Card.Content extra>
            <Icon name="user" />
            {tutorial.username}
          </Card.Content>
        </Card>
      ))}
    </div>
  </div>
);

export default Tutorials;
