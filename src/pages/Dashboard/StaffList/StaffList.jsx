import React from 'react'
import AddStaffModal from './AddStaffModal';
import Box from '@mui/material/Box'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import useGetCollec from '../../../Hooks/useGetCollec';
import LinearProgress from '@mui/material/LinearProgress';
import { updateDocument } from '../../../firebase';
import { arrayRemove } from 'firebase/firestore';


export default function Dashboard() {
    const [staff,loading] = useGetCollec("StaffList")
    const [open, setOpen] = React.useState(false);
    const toggleModal = () => setOpen(!open);

    const classes = {
        box:{
            backgroundColor: "white",
            borderRadius: "15px",
            padding: "20px"
        }
    }
    
    return (
        <>
            <AddStaffModal open={open} toggleModal={toggleModal}/>
            
            {loading && <LinearProgress />}
            {!loading && <Box
            component="main"
            sx={{p: 3}}
            >
                <Box sx={classes.box}>
                    <Typography variant='h2' component={"div"} textAlign="center" mb="30px">Staff List</Typography>
                    <Stack justifyContent={"flex-end"} direction="row" mb="20px" gap="10px">
                        <Button variant="contained" onClick={toggleModal}>Add Staff</Button>
                        <Button variant="contained">Add Rank</Button>
                    </Stack>

                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 650 }} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell align='center'>Skin</TableCell>
                                    <TableCell align='center'>Name</TableCell>
                                    <TableCell align='center'>Rank</TableCell>
                                    <TableCell align='center'>Minecraft Name</TableCell>
                                    <TableCell align='center'>Edit User</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {staff[0].StaffData.map((staff) => (
                                    <TableRow
                                    key={staff.id}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                    <TableCell align='center'><img src={`https://mc-heads.net/avatar/${staff.minecraftName}/30`} alt="head" /></TableCell>
                                    <TableCell align='center'>{staff.name}</TableCell>
                                    <TableCell align='center'>{staff.rank}</TableCell>
                                    <TableCell align='center'>{staff.minecraftName}</TableCell>
                                    <TableCell align='center'>
                                        {/* <IconButton size="large">
                                            <EditIcon fontSize="inherit" />
                                        </IconButton> */}
                                        <IconButton size="large" onClick={()=>updateDocument("StaffList","List",{StaffData: arrayRemove({id:staff.id,minecraftName:staff.minecraftName,name:staff.name,rank:staff.rank})})}>
                                            <DeleteIcon fontSize="inherit" />
                                        </IconButton>
                                    </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Box>
        </Box>}
        </>
    )
}