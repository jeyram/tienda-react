import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import logo from '../assets/logo.png';
import ShoppingCart from '@material-ui/icons/ShoppingCart';
import Badge from '@material-ui/core/Badge';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
	appBar: {
		backgroundColor: "whitesmoke",
		boxShadow: "none",
	},
	button: {
		marginLeft: theme.spacing(2),
	},
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  logo: {
      width: 80,
      height: 80
  }
}));

export default function Navbar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
						<img src={logo} className={classes.logo}/>
          </IconButton>
          <Typography variant="h6" color="textSecondary" component="p">
						Hello Guest
          </Typography>
						<div className={classes.button}>
						<Button variant="outlined" color="inherit">
							<strong>Sign In</strong>
						</Button>
						<IconButton aria-label="show cart items" color="inherit">
              <Badge badgeContent={2} color="secondary">
                <ShoppingCart fontSize="large" color="primary"/>
              </Badge>
						</IconButton>
					</div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
