import React, { useState, useEffect } from 'react';

import { useFetch } from '../hooks';

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
    return (
      <FilmsListItem key={index} title={item.title} planets={item.planets} />
    );
  });
};

const FilmsList = () => {
  const films = useFetch('https://swapi.co/api/films', []);
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
