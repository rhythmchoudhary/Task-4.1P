// src/components/featuresarticles.js
import React from 'react';
import { Card, Icon, Image } from 'semantic-ui-react';

const articleContent = [
  {
    title: 'Learn React or Vue',
    description: "A beginner's guide to choosing between React and Vue for web development.",
    author: 'John Doe',
    rating: 5
  },
  {
    title: 'Getting Started with NodeJS',
    description: 'Learn the basics of setting up a NodeJS environment and building a simple API.',
    author: 'Jane Smith',
    rating: 5
  },
  {
    title: 'Mastering React Hooks',
    description: 'A deep dive into React hooks and how to use them effectively in your projects.',
    author: 'Alex Brown',
    rating: 5
  }
];

const Articles = () => (
  <div className="featured-section">
    <h2>Featured Articles</h2>
    <div className="card-group">
      {articleContent.map((article, index) => (
        <Card key={index}>
          <Image src={`https://picsum.photos/200?random=${index}`} wrapped ui={false} />
          <Card.Content>
            <Card.Header>{article.title}</Card.Header>
            <Card.Meta>
              <span className="date">Rating: {article.rating}</span>
            </Card.Meta>
            <Card.Description>{article.description}</Card.Description>
          </Card.Content>
          <Card.Content extra>
            <Icon name="user" />
            {article.author}
          </Card.Content>
        </Card>
      ))}
    </div>
  </div>
);

export default Articles;
