import React from 'react'
import { useState } from 'react';
import { Formik, Form } from 'formik';
import TextfieldWrapper from '../../components/FormsUI/Textfield';
import SelectWrapper from '../../components/FormsUI/Select'
import { initialValues, validationSchema } from './FormikData';
import { createDocument } from '../../firebase';
import { v4 as uuidv4 } from 'uuid';
import CircularProgress from '@mui/material/CircularProgress';
import { useNavigate } from 'react-router-dom';
// MUI
import { Typography, Button } from '@mui/material';
import Stack from '@mui/material/Stack';

export default function ContactUs() {
    const navigate = useNavigate()
    const [loading, setLoading] = useState(false)
    let date = new Date(new Date().toLocaleDateString()).toLocaleDateString('en-CA')
    let time = new Date().toLocaleTimeString()

    const classes = {
        form:{
            backgroundColor: "rgb(255,255,255,1)",
            borderRadius: "20px",
            padding: "30px"
        }
    }

    function onSubmit(e, { resetForm }){
        // setLoading(true)
        // resetForm({values: ''})
        const data = {
            status:"open",
            name:e.name,
            email:e.email,
            subject:e.subject,
            messages:[{id:uuidv4(),date:date,time:time,from:e.name,message:e.message}],
        }
        createDocument("Tickets",data)
        // navigate("/")
    };

    return (
        <Stack
            justifyContent="center"
            alignItems="center"
            height="100vh"
        >
            <Stack
                sx={classes.form}
            >
                <Typography variant='h3' textAlign="center">Contact Us</Typography>
                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={onSubmit}
                >
                    <Form>
                        <TextfieldWrapper name="name" label="Name" margin="normal" />
                        <TextfieldWrapper name="email" label="Email" margin="normal" />
                        <SelectWrapper name="subject" label="Subject" options={{"General Question":"General Question"}} margin="normal" />
                        <TextfieldWrapper name="message" label="Message" margin="normal" multiline rows={5}/>
                        <Button variant="contained" fullWidth sx={{mt:"10px"}} type="submit" disabled={loading && true}>{loading ? <CircularProgress color='common'/> : "Send"}</Button>
                    </Form>
                </Formik>
            </Stack>
        </Stack>
    )
}