import React from 'react'
import video from "../../media/trailer.mp4"
import { Outlet } from 'react-router-dom'

    export default function VideoLayout() {
    return (
        <>
            <video src={video} autoPlay muted loop />
            <Outlet />
        </>
    )
}
