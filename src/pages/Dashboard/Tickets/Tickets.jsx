import React,{ useState, useEffect } from 'react';
import useGetDocs from './useGetDocs';
import useGetCount from '../../../Hooks/useGetCount'
import OpenTickets from './OpenTickets';
import ClosedTickets from './ClosedTickets';
import { useNavigate } from 'react-router-dom';
// MUI
import Box from '@mui/material/Box'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import TablePagination from '@mui/material/TablePagination';
import CircularProgress from '@mui/material/CircularProgress';

    const columns = [
        { id: 'index', label: 'TicketID'},
        { id: 'name', label: 'Name'},
        { id: 'email', label: 'Email'},
        { id: 'subject', label: 'Subject'},
        { id: 'status', label: 'Status'},
    ];

export default function Tickets() {
    const navigate = useNavigate()
    const [tickets,loading,changeStatus] = useGetDocs()
    const [status,setStatus] = useState("open")

    useEffect(()=>{
        if(status == "open"){
            setPage(0)
            changeStatus("open","asc")
        }else{
            setPage(0)
            changeStatus("closed","desc")
        }
    },[status])

    const classes = {
        box:{
            backgroundColor: "white",
            borderRadius: "15px",
            padding: "20px",
            margin: 3
        }
    }

    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);
    
        const handleChangePage = (event, newPage) => {
        setPage(newPage);
        };
    
        const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
        };
    
        return (
            <Box sx={classes.box}>
                <Typography variant='h2' component={"div"} textAlign="center" mb="30px">Tickets</Typography>
                <ButtonGroup variant="outlined" fullWidth>
                    <Button fullWidth onClick={()=>setStatus("open")}>OPEN TICKETS</Button>
                    <Button fullWidth onClick={()=>setStatus("closed")}>CLOSED TICKETS</Button>
                </ButtonGroup>
                <TableContainer sx={{ maxHeight: 600 }}>
                        <Table stickyHeader aria-label="sticky table">
                            <TableHead>
                            <TableRow>
                            {columns.map((column) => (
                                <TableCell key={column.id} align="center">{column.label}</TableCell>
                            ))}
                            </TableRow>
                            </TableHead>
                            <TableBody>
                            {loading ? <TableRow><TableCell colSpan={5} sx={{textAlign:"center"}}><CircularProgress /></TableCell></TableRow> :
                                tickets.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                .map((row) => {
                                return (
                                    <TableRow hover role="checkbox" sx={{cursor:"pointer"}} tabIndex={-1} key={row.index} onClick={()=>navigate(`/tickets/${row.id}`)}>
                                    {columns.map((column) => {
                                        const value = row[column.id];
                                        return (
                                        <TableCell key={column.id} align="center">
                                            {value}
                                        </TableCell>
                                        );
                                    })}
                                    </TableRow>
                                );
                                })}
                            </TableBody>
                        </Table>
                </TableContainer>
                        <TablePagination
                        rowsPerPageOptions={[10, 20, 30]}
                        component="div"
                        count={tickets.length}
                        rowsPerPage={rowsPerPage}
                        page={page}
                        onPageChange={handleChangePage}
                        onRowsPerPageChange={handleChangeRowsPerPage}
                        />
            </Box>
    )
}