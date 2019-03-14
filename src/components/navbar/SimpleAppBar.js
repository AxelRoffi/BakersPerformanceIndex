import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import { Link } from 'react-router-dom'

const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  tagline: {
    TextAlign: 'left',
  }
};

function SimpleAppBar(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
            <Link to='/'>BAKERS PERFORMANCE INDEX</Link>
          </IconButton>
          <Typography variant="h6" color="inherit" className={classes.grow}>
          </Typography>
          <Button color="inherit"><Link to='/about-us'>About Us</Link></Button>
          <Button color="inherit"><Link to='/contact'>Contact</Link></Button>
          <Button ><Link to='/our-offer'>Baking Service? Our Offer</Link></Button>
        </Toolbar>
        <Typography variant="h6" color="inherit" style={{ color: 'white', textAlign: 'left', padding: '5px 5px' }}>
          service tracking bakers rewards delivery
        </Typography>
      </AppBar>
    </div>
  );
}

SimpleAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleAppBar);
