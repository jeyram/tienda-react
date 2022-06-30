import React from 'react';
import AddressInput from './AddressInput';
import { Link } from "react-router-dom"
import { Button, Grid, Typography } from '@material-ui/core';
import { useForm, FormProvider } from "react-hook-form"
import { useStateValule } from '../../StateProvider';
import { actionTypes } from '../../reducer';

const NAddressForm = ({handleNext}) => {
	const methods = useForm();
	const [{ shippingData }, dispatch ] = useStateValule();

	return (
		<>
      <Typography variant="h6" gutterBottom>
        Shipping address
      </Typography>
			<FormProvider {...methods}>
				<form onSubmit={methods.handleSubmit(data =>{
					dispatch({
						type:actionTypes.SET_SHIPPINGDATA,
						shippingData: data,
					});
					handleNext();
				})}>
					<Grid container spacing={3}>
						<AddressInput required name="firstName" label="FirstName"/>
						<AddressInput required name="lastName" label="Last Name"/>
						<AddressInput required name="address1" label="Address"/>
						<AddressInput required name="email" label="E-mail"/>
						<AddressInput required name="city" label="City"/>
						<AddressInput required name="postCode" label="Post Code"/>
					</Grid>
					<div style={{ display:"flex" , justifyContent:"space-between", marginTop:"1em" }}>
						<Button component={ Link } to="ckeckout-page">Back to the Checkpoint Page</Button>
						<Button type="submit" variant="contained" color='primary'>Next</Button>
					</div>

				</form>
			</FormProvider>
		</>
	)
}

export default NAddressForm