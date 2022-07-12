// @ts-nocheck
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
import { Link } from 'react-router-dom';
import { useStateValule } from "../StateProvider";
import "firebase/auth";
import { auth } from '../firebase';
import { actionTypes } from 'reducer';
import { useHistory} from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
	appBar: {
		backgroundColor: "whitesmoke",
		boxShadow: "none",
	},
  grow: {
    flexGrow: 1,
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
  const [{basket, user}, dispatch] = useStateValule();
  const history = useHistory()

  const handleAuth = () => {
    if (user){
      auth.signOut();
      dispatch({
        type: actionTypes.EMPTY_BASKET,
        basket: [],
      });
      dispatch({
        type: actionTypes.SET_USER,
        user: null,
      });
      history.push("/")
    }
  }

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar>
          <Link to="/">
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
              <img src={logo} alt="Yoza Moon" className={classes.logo}/>
            </IconButton>
          </Link>
          <div className={classes.grow}/>
          <Typography variant="h6" color="textSecondary" component="p">
						Hello {user ? user.email : "Guest"}
          </Typography>
						<div className={classes.button}>
              <Button component={Link} to="/signin" variant="outlined" color="lightgray" onClick={handleAuth}>
                <strong>{user ? "Sign Out" : "Sign In"}</strong>
              </Button>
            <Link to="/checkout-page">
              <IconButton aria-label="show cart items" color="inherit">
                <Badge badgeContent={basket?.length} color="secondary">
                  <ShoppingCart fontSize="large" color="primary"/>
                </Badge>
              </IconButton>
            </Link>
					</div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
