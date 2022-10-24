import React from 'react'
import { UserAuth } from '../context/AuthContext'
import { Stack } from '@mui/material'
import GoogleButton from 'react-google-button'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

export default function Login() {
    let navigate = useNavigate();
    const { googleSignIn, user }  = UserAuth()

    // async function handleSignIn(){
    //     try{
    //         await googleSignIn()
    //     }catch(error){
    //         console.log(error)
    //     }
    // }

    useEffect(()=>{
        if(user?.email){
            navigate("/staff-list")
        }
    },[user])

    return (
        <Stack
            justifyContent="center"
            alignItems={"center"}
            height="100vh"
        >
            <GoogleButton onClick={googleSignIn}></GoogleButton>
        </Stack>
    )
}