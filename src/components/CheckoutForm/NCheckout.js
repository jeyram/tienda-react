import { Paper, Step, StepLabel, Stepper, Typography } from "@material-ui/core";
import React from "react";
import NAddressForm from "./NAddressForm";
import PaymentForm from "./PaymentForm";
import useStyles from "./styles";

const NCheckout = () => {
	const classes = useStyles();
	const steps = ["Shipping address", "Payment details"];
	const [activeStep, setActiveStep] = React.useState(0);
  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

	const Form = () => activeStep === 0 ? <NAddressForm handleNext = {handleNext} /> : <PaymentForm/>

	return (
		<>
			<main className={classes.layout}>
				<Paper className={classes.paper}>
					<Typography component= "h1" variant="h4" align="center">
						Checkout
					</Typography>
					<Stepper activeStep={activeStep} className={classes.stepper}>
						{steps.map(step => (
							<Step key={step}>
								<StepLabel> {step} </StepLabel>
							</Step>
						))}
					</Stepper>
					<Form/>
				</Paper>

			</main>
		</>
	)
}

export default NCheckout
