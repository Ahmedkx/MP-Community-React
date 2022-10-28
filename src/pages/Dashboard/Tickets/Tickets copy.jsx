import React,{ useState } from 'react';
// MUI
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
import ButtonGroup from '@mui/material/ButtonGroup';
import OpenTickets from './OpenTickets';
import ClosedTickets from './ClosedTickets';

export default function Tickets() {
    const [showOpened, setshowOpened] = useState(true)

    const classes = {
        box:{
            backgroundColor: "white",
            borderRadius: "15px",
            padding: "20px"
        }
    }

    return (
        <>
            {<Box
            component="main"
            sx={{p: 3}}
            >
                <Box sx={classes.box}>
                    <Typography variant='h2' component={"div"} textAlign="center" mb="30px">Tickets</Typography>
                    <ButtonGroup variant="outlined" fullWidth>
                        <Button fullWidth onClick={()=>setshowOpened(true)}>OPEN TICKETS</Button>
                        <Button fullWidth onClick={()=>setshowOpened(false)}>CLOSED TICKETS</Button>
                    </ButtonGroup>
                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 650 }} aria-label="simple table" stickyHeader>
                            <TableHead>
                                <TableRow>
                                    <TableCell align='center'>Ticket ID</TableCell>
                                    <TableCell align='center'>Name</TableCell>
                                    <TableCell align='center'>Email</TableCell>
                                    <TableCell align='center'>Subject</TableCell>
                                    <TableCell align='center'>Status</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {showOpened ? <OpenTickets /> : <ClosedTickets />}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Box>
            </Box>}
        </>
    )
}
