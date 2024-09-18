import React from 'react';
import { Input, Button } from 'semantic-ui-react';

const Header = () => (
  <header>
    <div className="logo">DEV@Deakin</div>
    <Input icon="search" placeholder="Search..." />
    <Button>Post</Button>
    <Button>Login</Button>
  </header>
);

export default Header;
