import '../../App.css'
import { TextField, Button, Grid } from "@material-ui/core";
import './admin.css'


function Admin() {
    const tester = console.log("OK")

    return (
        <div className="bg">
            <h1>ADMIN DASHBOARD</h1>
            <Grid name="Grid" container Spacing={20} columnSpacing={{ xs: 2, sm: 2, md: 2 }} rowSpacing={2} >
                <Grid xs={12} item>
                    <TextField name="Email" label="Email" placeholder="Only authorized @neomush.com emails accepted" variant="outlined" margin="dense" fullWidth required className="contact__fields" />
                </Grid>
                <Grid xs={12} item>
                    <TextField type="password" name="pwd" label="Password" placeholder="Password" margin="dense" variant="outlined" fullWidth required className="contact__fields" />
                </Grid>
            </Grid>
            <Button className="auth__btn" onClick={tester} variant="contained" margin="dense" >Authenticate</Button>
        </div>
    )
}

export default Admin;
