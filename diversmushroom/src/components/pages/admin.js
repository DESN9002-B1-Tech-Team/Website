import '../../App.css'
import { TextField, Button, Grid } from "@material-ui/core";
import './admin.css'

import React, { useRef, useState } from 'react';

import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import 'firebase/compat/analytics';

import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';

firebase.initializeApp({
    apiKey: "AIzaSyCDPoqAdAAGBSTHsO0fWdSPTIC6GQ5P16I",
    authDomain: "neomush-desn9002.firebaseapp.com",
    projectId: "neomush-desn9002",
    storageBucket: "neomush-desn9002.appspot.com",
    messagingSenderId: "611949112320",
    appId: "1:611949112320:web:02c30d964e76685a58bce5",
    measurementId: "G-CFD30TVLHP"
})

const auth = firebase.auth();
const firestore = firebase.firestore();
const analytics = firebase.analytics();



function Admin() {

    const [user] = useAuthState(auth);

    return (<section>{user ? <Dashboard /> : <Authenticate />}</section>
    )
}


function Dashboard() {
    return (
        <div> Logged In </div>
    )
}


function Authenticate() {

    const signInWithEmailAndPassword = async () => {
        try {
            await auth.signInWithEmailAndPassword(email.current.value, pwd.current.value);
        } catch (err) {
            console.error(err);
        }
    };

    const email = useRef('');
    const pwd = useRef('');

    return (
        <div className="bg">
            <h1>ADMIN DASHBOARD</h1>
            <Grid name="Grid" container Spacing={20} columnSpacing={{ xs: 2, sm: 2, md: 2 }} rowSpacing={2} >
                <Grid xs={12} item>
                    <TextField inputRef={email} label="Email" placeholder="Only authorized @neomush.com emails accepted" variant="outlined" margin="dense" fullWidth required className="contact__fields" />
                </Grid>
                <Grid xs={12} item>
                    <TextField type="password" inputRef={pwd} label="Password" placeholder="Password" margin="dense" variant="outlined" fullWidth required className="contact__fields" />
                </Grid>
            </Grid>
            <Button className="auth__btn" onClick={signInWithEmailAndPassword} variant="contained" margin="dense" >Authenticate</Button>
        </div>
    )
}


export default Admin;
