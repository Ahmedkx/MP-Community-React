import React, { useState } from 'react'
import { useEffect } from 'react'
import { Stack } from '@mui/system'
import { useNavigate } from 'react-router-dom'

export default function TicketSent() {
    const navigate = useNavigate();
    const [loaded, setLoaded] = useState(false)
    console.log(loaded)
    const classes = {
        stack:{
            backgroundColor: "rgb(255,255,255,1)",
            borderRadius: "20px",
            padding: "30px"
        }
    }

    useEffect(()=>{
        if(loaded){
            const timer = setTimeout(() => navigate("/"), 4000);
            return () => clearTimeout(timer);
        }
    },[loaded])

    return (
        <Stack
            justifyContent="center"
            alignItems="center"
            height="100vh"
        >
            <Stack
                sx={classes.stack}
            >
                <img src={require('../../media/check-mark.gif')} alt='sent' width="500px" onLoad={()=>setLoaded(true)}/>
            </Stack>
        </Stack>
    )
}
