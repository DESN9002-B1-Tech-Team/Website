import React from "react";
import './ContactUs.css';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';



function ContactUs() {
  return (
    <div className='contact'>
      <h1>Contact Us</h1>
      <div className='contact__form'>
        {
          <Card name = "contactus_form"stype={{backgroundColor: 'transparent', maxWidth:450}}>
            <form
              action="https://formspree.io/f/mjvjdbov"
              method="POST"
            >
              <CardContent >
                <Grid name = "Grid" container Spacing={20} columnSpacing={{ xs: 1, sm: 1, md: 1 }} rowSpacing = {1} > 
                  <Grid xs={12} sm = {6} item>
                    <TextField name = "name" label="Name " placeholder="Enter your name/nickname" variant="outlined" fullWidth required />
                  </Grid>
                  <Grid xs={12} sm = {6} item>
                    <TextField type = "number" name = "Phone Number" label="Phone Number" placeholder="Enter your phone number" variant="outlined" fullWidth required />
                  </Grid>
                  <Grid xs={12} item>
                    <TextField type ='email' name = "email" label="Email" placeholder="Enter your email" variant="outlined" fullWidth required />
                  </Grid>
                  <Grid xs={12} item>
                    <TextField label="Your Message:" multiline name = "message" rows={3} placeholder="Please type your message here" variant="outlined" fullWidth required />
                  </Grid>
                  <Grid xs={12} item>
                    <Button type="submit" name = "submit" variant="contained" color="primary" fullWidth>submit message</Button>
                  </Grid>
                </Grid>
              </CardContent>
            </form>
          </Card>
          
        }
      </div>
    </div>
  )
}

export default ContactUs;
