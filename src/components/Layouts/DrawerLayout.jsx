import React from 'react'
import Sidebar from '../Sidebar/Sidebar'
import { Outlet } from 'react-router-dom'
import { Stack } from '@mui/system'

    export default function DrawerLayout() {
    return (
        <div style={{backgroundColor: "#FDFEFF"}}>
                <Sidebar />
                <Stack sx={{marginLeft: {sm:"240px"},paddingTop: {xs:"30px",sm:"0px"},backgroundColor: "rgb(128,128,128,0.15)",height: "100vh"}}>
                    <Outlet />
                </Stack>
        </div>
    )
}