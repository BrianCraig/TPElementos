import React from 'react';
import { navigate } from '@reach/router';
import { makeStyles } from '@material-ui/core/styles';
import { Router } from './Router';
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import PersonIcon from '@material-ui/icons/Person'
import CalendarIcon from '@material-ui/icons/CalendarToday'
import Container from '@material-ui/core/Container';
import { ModalShow } from './components/ModalShow';

const useStyles = makeStyles(theme => ({
  title: {
    flexGrow: 1,
  },
}));

const App = () => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <AppBar position="static">
        <Toolbar>
          <Typography
            className={classes.title}
            variant="subtitle1"
            color="inherit"
            onClick={() => navigate('/')}
          >
            SacaDelMedio
        </Typography>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="View Host Profile"
            onClick={() => navigate('/host/profile')}
          >
            <PersonIcon />
          </IconButton>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="Reserve Calendar"
            onClick={() => navigate('/host/calendar')}
          >
            <CalendarIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Container>
        <Router />
      </Container>
      <ModalShow />
    </React.Fragment>
  )
}

export default App;
