import React from 'react';
import FilmsList from '../components/FilmsList';
import Container from '@material-ui/core/Container';

const MainView = () => {
  return (
    <Container style={{ height: '90vh', maxWidth: '790px' }}>
      <FilmsList />
    </Container>
  );
};

export default MainView;
