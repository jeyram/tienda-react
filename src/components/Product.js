import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AddShoppingCart from '@material-ui/icons/AddShoppingCart';
import Accounting from 'accounting';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  title: {
    fontSize: 16,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function Product({product :{id, name, productType, image, price, rating, description}}) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.root}>
      <CardHeader
        action={
          <Typography
            // variant='h6'
            color='textSecondary'
            >
							{Accounting.formatMoney(price, { symbol: "MX",  format: "%v %s" })}
            </Typography>
        }
        title={
          <Typography
          className={classes.title}
            >
              {name}
            </Typography>
        }
        subheader="In Stock"
      />
      <CardMedia
        className={classes.media}
				image={image}
        title="Luchador enmascarado"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {productType}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to Crart">
					<AddShoppingCart fontSize='large'/>
        </IconButton>
				{Array(rating)
					.fill()
					.map((_, i) => (
						<p>&#11088;</p>
					))}
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>
            {description}
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
