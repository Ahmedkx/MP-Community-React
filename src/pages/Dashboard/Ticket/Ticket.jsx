import React from 'react'
import { useParams } from 'react-router-dom';
import useGetDoc from '../../../Hooks/useGetDoc';
import TextfieldWrapper from '../../../components/FormsUI/Textfield';
import { Formik, Form } from 'formik';
import { updateDocument } from '../../../firebase';
import { useNavigate } from 'react-router-dom';
import { initialValues,validationSchema,onSubmit } from './FormikData';
import { v4 as uuidv4 } from 'uuid';
import { arrayUnion } from 'firebase/firestore';
import { UserAuth } from '../../../context/AuthContext'
import useSendEmail from './useSendEmail';
// MUI
import LinearProgress from '@mui/material/LinearProgress';
import { Box,Stack,Divider,Avatar, Typography, Button, IconButton, Tooltip } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';


export default function Ticket() {
    let date = new Date(new Date().toLocaleDateString()).toLocaleDateString('en-CA')
    let time = new Date().toLocaleTimeString()
    const [sendEmail] = useSendEmail()
    const {user} = UserAuth();
    const navigate = useNavigate();
    const {ticket_id} = useParams();
    const [ticket,loading] = useGetDoc("Tickets",ticket_id)

    const classes = {
        Box:{
            backgroundColor: "white",
            borderRadius: "15px",
            padding: "20px",
            height: "fit-content"
        },
        Divider:{
            mt:2
        },
        Avatar:{
            width:"70px",
            height:"70px",
            bgcolor: "green"
        }
    }

    function onSubmit(e,{resetForm}){
        resetForm({values: ''})
        const data = {
            messages: arrayUnion({id:uuidv4(),date:date,time:time,from:user.email,message:e.message})
        }
        updateDocument("Tickets",ticket_id,data)
        
        sendEmail({
            name:ticket.name,
            email:ticket.email,
            message:e.message,
            old_message:ticket.messages[0].message
        })
    };

    function closeTicket() {
        updateDocument("Tickets",ticket_id,{status:"closed"})
        navigate("/tickets")
    }

    if(loading)return <LinearProgress />
    return (
        <Box sx={{p:3}}>
            <Box sx={classes.Box}>
                <Stack
                    justifyContent="space-between"
                    alignItems="center"
                    height="90px"
                    direction="row"
                    px="5px"
                    mb={2}
                >
                    <Stack
                        alignItems="center"
                        direction="row"
                        gap="10px"
                    >
                        <Avatar sx={classes.Avatar} src="/broken-image.jpg"></Avatar>
                        <Stack>
                            <Typography variant='h6'>{ticket.name}</Typography>
                            <Typography fontSize={14}>{ticket.email}</Typography>
                        </Stack>
                    </Stack>
                    <Stack>
                        <Button color='error' variant='contained' onClick={closeTicket}>Close Ticket</Button>
                    </Stack>
                </Stack>
                <Divider />
                <Stack
                    height="80%"
                    justifyContent="space-between"
                >
                    {ticket.messages.map((message)=>(
                        <Stack
                            key={message.id}
                            direction="row"
                            gap="10px"
                            mt={3}
                        >
                            <Tooltip title={message.from}>
                                <Avatar sx={classes.Avatar} src="/broken-image.jpg"></Avatar>
                            </Tooltip>
                                <Stack
                                    bgcolor="#EAEAEA"
                                    borderRadius="5px"
                                    p="10px"
                                    justifyContent="center"
                                >
                                    {message.message}
                                </Stack>
                        </Stack>
                    ))}
                            <Formik
                                initialValues={initialValues}
                                validationSchema={validationSchema}
                                onSubmit={onSubmit}
                            >
                                <Form>
                                    <Stack
                                        direction="row"
                                        mt={3}
                                    >
                                        <Box
                                        flexGrow="1"
                                        mr="10px"
                                        >
                                        <TextfieldWrapper name="message" placeholder="Aa" multiline maxRows={3}></TextfieldWrapper>
                                        </Box>
                                        <IconButton size="large" sx={{width:"56px",height:"56px"}} type="submit">
                                            <SendIcon />
                                        </IconButton>
                                    </Stack>
                                </Form>
                            </Formik>
                    </Stack>
            </Box>
        </Box>
    )
}
