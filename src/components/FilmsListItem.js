import React, { Fragment } from 'react';

import { useMultipleFetch } from '../hooks';

import { makeStyles } from '@material-ui/core/styles';

import ListItem from '@material-ui/core/ListItem';

import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';

import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';

import ListItemTable from './ListItemTable';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper
  },
  nested: {
    paddingLeft: theme.spacing(4)
  }
}));

const FilmsListItem = props => {
  let { title, planets } = props;
  // console.log(planets);
  const [open, setOpen] = React.useState(false);
  const planetsData = useMultipleFetch(planets, open, []);
  // console.log(planetsData);

  const classes = useStyles();

  function handleClick() {
    setOpen(!open);
  }

  return (
    <Fragment>
      <ListItem button onClick={handleClick}>
        <ListItemText primary={title} />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open} timeout='auto' unmountOnExit>
        <ListItemTable planetsData={planetsData} />
      </Collapse>
    </Fragment>
  );
};

export default FilmsListItem;
