import React from "react";
import './ContactUs.css';
import { TextField, Grid, Button, CardContent, Card } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

const SubmitButton = withStyles({
  root: {
    background: "rgba(255, 255, 255, 0.4)",
    borderRadius: 8,
    border: 0,
    color: "black",
    height: 48,
    padding: "0 30px",
  }
})(props => <Button {...props} />);


function ContactUs() {
  return (
    <div className='contact'>
      <h1>Contact Us</h1>
      <div className='contact__form'>
        <Card name = "contactus__form" style={{ backgroundColor: 'rgba(255, 255, 255, 0.3)', border: 'none', padding: '2px'}}>
          <form
            action="https://formspree.io/f/mjvjdbov"
            method="POST"
          >
            <CardContent >
              <Grid name = "Grid" container Spacing={20} columnSpacing={{ xs: 2, sm: 2, md: 2 }} rowSpacing = {2} >
                <Grid xs={12} sm = {6} item className="contact__row__1">
                  <TextField name="name" label="Name " placeholder="Enter your name/nickname" variant="outlined" margin="dense" fullWidth required className="contact__fields" />
                </Grid>
                <Grid xs={12} sm={6} item className="contact__row__2">
                  <TextField type="number" name="Phone Number" label="Phone Number" placeholder="Enter your phone number" margin="dense" variant="outlined" fullWidth className="contact__fields" />
                </Grid>
                <Grid xs={12} item>
                  <TextField type='email' name="email" label="Email" placeholder="Enter your email" variant="outlined" margin="dense" fullWidth required className="contact__fields" />
                </Grid>
                <Grid xs={12} item>
                  <TextField type='text' label="Your Message:" multiline name="message" rows={3} placeholder="Please type your message here" margin="dense" variant="outlined" fullWidth required className="contact__fields" />
                </Grid>
                <Grid xs={12} item>
                  <SubmitButton fullWidth>SUBMIT</SubmitButton>
                </Grid>
              </Grid>
            </CardContent>
          </form>
        </Card>
      </div>
    </div>
)}

export default ContactUs;
