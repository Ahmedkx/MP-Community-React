import React from 'react'
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import TextfieldWrapper from '../../../components/FormsUI/Textfield';
import SelectWrapper from '../../../components/FormsUI/Select';
import Modal from '@mui/material/Modal';
import CloseIcon from '@mui/icons-material/Close';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { updateDocument } from '../../../firebase';
import { v4 as uuidv4 } from 'uuid';
import { arrayUnion } from 'firebase/firestore';

export default function AddStaffModal({open,toggleModal}) {
    const classes = {
        modal: {
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 400,
            bgcolor: 'background.paper',
            boxShadow: 24,
            p: 4,
            borderRadius: "20px",
        },
        closeBtn: {
            cursor: "pointer",
            "&:hover": {
            color:"red",
            transition:"0.3s"
            }
        }
    }

    const Ranks = {
        Helper: "Helper",
        Moderator: "Moderator",
        SirMod: "SirMod",
        Admin: "Admin",
        HeadAdmin: "Head Admin",
        Manager: "Manager",
        Owner: "Owner",
    }

    function addStaff(e){
        toggleModal();
        const newStaff = {
            id: uuidv4(),
            name: e.name,
            minecraftName: e.minecraftName,
            rank: e.rank
        }
        updateDocument("StaffList","List",{StaffData:arrayUnion(newStaff)})
    }

    const initialValues = {
        name: "",
        minecraftName: "",
        rank: ""
    };

    const validationSchema = Yup.object().shape({
        name: Yup.string().typeError("").required("Required"),
        minecraftName: Yup.string().required("Required"),
        rank: Yup.string().required("You must select a rank.")
    })

    return (
        <Modal
        open={open}
        onClose={toggleModal}
        >
            <Box sx={classes.modal}>
                <Stack flexDirection={"row"} justifyContent="space-between" alignItems="center">
                    <Typography variant="h6" component="h2">
                        Add New Staff
                    </Typography>
                    <CloseIcon onClick={toggleModal} sx={classes.closeBtn}/>
                </Stack>
                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={addStaff}
                >
                    {props => (
                    <Form>
                        <Box sx={{ mt: 2, textAlign:"center" }}>
                                <img src={`https://mc-heads.net/avatar/${props.values.minecraftName}/160`} alt="head" />
                                <TextfieldWrapper name="name" label="Name" />
                                <TextfieldWrapper name="minecraftName" label="Minecraft Name" margin="normal" />
                                <SelectWrapper name="rank" label="Rank" options={Ranks}/>
                                <Button variant="contained" fullWidth sx={{mt:"10px"}} type="submit">Add</Button>
                        </Box>
                    </Form>)}
                </Formik>
            </Box>
        </Modal>
)}