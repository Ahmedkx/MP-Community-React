import React from 'react'
import { Formik, Form } from 'formik';
import { Typography, Button } from '@mui/material';
import Stack from '@mui/material/Stack';
import TextfieldWrapper from '../../components/FormsUI/Textfield';
import SelectWrapper from '../../components/FormsUI/Select'
import { initialValues, validationSchema, onSubmit } from './FormikData';

export default function ContactUs() {
    const classes = {
        form:{
            backgroundColor: "rgb(255,255,255,1)",
            borderRadius: "20px",
            padding: "30px"
        }
    }

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
                        <SelectWrapper name="subject" label="Subject" options={{T:"T"}} margin="normal" />
                        <TextfieldWrapper name="message" label="Message" margin="normal" multiline rows={5}/>
                        <Button variant="contained" fullWidth sx={{mt:"10px"}} type="submit" >send</Button>
                    </Form>
                </Formik>
            </Stack>
        </Stack>
    )
}