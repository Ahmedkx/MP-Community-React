import React from 'react'
import useGetDocs from '../../../Hooks/useGetDocs'
import { TableRow,TableCell } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import CircularProgress from '@mui/material/CircularProgress';


export default function OpenTickets() {
    const navigate = useNavigate();
    const [tickets,loading] = useGetDocs("Tickets","status","==","open")


    if(loading) return (<TableRow><TableCell colSpan={4} sx={{textAlign:"center"}}><CircularProgress /></TableCell></TableRow>)
    return (
        <>
        {tickets.map((ticket) => (
            <TableRow
            key={ticket.id}
            hover
            sx={{ '&:last-child td, &:last-child th': { border: 0 } ,cursor: "pointer"}}
            onClick={()=>navigate(`/tickets/${ticket.id}`)}
            >
                    {/* <TableCell align='center'>
                        <Badge color="error" variant="dot"></Badge>
                    </TableCell> */}
                <TableCell align='center'>{ticket.name}</TableCell>
                <TableCell align='center'>{ticket.email}</TableCell>
                <TableCell align='center'>{ticket.subject}</TableCell>
                <TableCell align='center'>{ticket.status}</TableCell>
            </TableRow>
        ))}
        </>
    )
}
