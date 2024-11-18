import React from 'react';
import { Input, Button } from 'semantic-ui-react';
import './header.css';

const Header = () => (
  <header className="navbar">
    <div className="logo">DEV@Deakin</div>
    <div className="search-bar">
      <Input icon="search" placeholder="Search..." />
    </div>
    <div className="buttons">
      <Button basic>Post</Button>
      <Button basic>Login</Button>
    </div>
  </header>
);

export default Header;
