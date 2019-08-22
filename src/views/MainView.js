import React from 'react';
import FilmsList from '../components/FilmsList';
import Container from '@material-ui/core/Container';

const MainView = () => {
  return (
    <Container maxWidth='sm' style={{ height: '90vh' }}>
      <FilmsList />
    </Container>
  );
};

export default MainView;
