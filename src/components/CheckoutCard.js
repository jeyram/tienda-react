import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import DeleteIcon from '@material-ui/icons/Delete';
import accounting from 'accounting';
import { IconButton } from '@material-ui/core';
import { actionTypes } from 'reducer';
import { useStateValule } from "../StateProvider";

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
	cardActions: {
		display: "flex",
		justifyContent: 'space-between',
		textAlign: 'center',
	},
	cardRating: {
		display: 'flex',
	}
}));

export default function CheckoutCard({ product: { id, name, productType, image, price, rating, description } }) {
	const classes = useStyles();
	const [{basket}, dispatch] = useStateValule();
	const removeItem = () => dispatch({
		type: actionTypes.REMOVE_ITEM,
		id: id,
	})

	return (
		<Card className={classes.root}>
			<CardHeader
				action={
					<Typography
						// variant='h6'
						color='textSecondary'
					>
						{accounting.formatMoney(price, "MX")}
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
			<CardActions disableSpacing className={classes.cardActions}>
				<div className={classes.cardRating}>
					{Array(rating)
						.fill()
						.map((_, i) => (
							<p>&#11088;</p>
						))}
				</div>
				<IconButton onClick={removeItem}>
					<DeleteIcon fontSize='large'/>
				</IconButton>
			</CardActions>
		</Card>
	);
}
