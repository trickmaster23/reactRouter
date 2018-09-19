import React from 'react';
import { Container } from 'reactstrap';

export default () => {
  return (
    <div>
      <footer className="fixed-bottom container-fluid text-center">
        <Container>
          Copywrite &copy; {new Date().getFullYear()} Team Secret
        </Container>
      </footer>
    </div>
  );
};
