import React, { useState, useEffect } from 'react';
import FilmsListItem from './FilmsListItem';
import { List } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  filmsList: {
    backgroundColor: '#E0E6EE',
    minHeight: '90vh'
  }
}));

const ListItems = props => {
  let films = props.films;
  return films.map((item, index) => {
    return <FilmsListItem key={index} title={item.title} />;
  });
};

const FilmsList = () => {
  const [films, setFilms] = useState([]);
  useEffect(() => {
    fetch('https://swapi.co/api/films')
      .then(function(response) {
        return response.json();
      })
      .then(function(myJson) {
        console.log(myJson.results);
        setFilms(myJson.results);
      });
  }, []);
  const classes = useStyles();

  return (
    <List className={classes.filmsList}>
      <div>
        <ListItems films={films} />
      </div>
    </List>
  );
};

export default FilmsList;
