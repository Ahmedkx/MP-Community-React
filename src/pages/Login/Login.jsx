import React from 'react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { UserAuth } from '../../context/AuthContext'
import TextfieldWrapper from '../../components/FormsUI/Textfield'
import { Formik, Form } from 'formik';
import { initialValues,validationSchema } from './FormikData'
import CircularProgress from '@mui/material/CircularProgress';
// MUI
import { Stack, Typography } from '@mui/material'
import ButtonWrapper from '../../components/FormsUI/Button'
import { useState } from 'react'

export default function Login() {
    let navigate = useNavigate();
    const [loading, setLoading] = useState(false)
    const {signIn, user} = UserAuth()

    const classes = {
        stack:{
            backgroundColor: "rgb(255,255,255,1)",
            borderRadius: "20px",
            padding: "30px"
        }
    }

    useEffect(()=>{
        if(user?.email){
            navigate("/staff-list")
        }
    },[user])

    function onSubmit(e){
        setLoading(true)
        signIn(e.email, e.password)
    }

    return (
        <Stack
            justifyContent="center"
            alignItems="center"
            height="100vh"
        >
            <Stack sx={classes.stack}>
                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={onSubmit}
                >
                    <Form>
                        <Typography variant='h3' textAlign="center">Login</Typography>
                        <TextfieldWrapper name="email" label="Email" margin="normal"/>
                        <TextfieldWrapper name="password" label="Password" margin="normal" type="password"/>
                        <ButtonWrapper disabled={loading}>{loading ? <CircularProgress color='common'/> :"Sign in"}</ButtonWrapper>
                    </Form>
                </Formik>
            </Stack>
        </Stack>
    )
}