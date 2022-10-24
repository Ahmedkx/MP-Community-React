import React, { useEffect } from 'react'
import { useState } from 'react'
import "../styles/home.css"
import logo from "../media/logo.webp"
import discord from "../media/discord.png"
import vote from "../media/vote.png"
import store from "../media/store.png"
import staff from "../media/staff.png"
import ranks from "../media/ranks.png"
import { useNavigate } from "react-router-dom";

export default function Home() {
    const navigate = useNavigate();

    const [online, setOnline] = useState(0)
    const [copyText, setCopyText] = useState("Click To Copy Server IP")


    useEffect(()=>{
        async function fetchData() {
            // let myData = await fetch("https://api.minetools.eu/ping/mc.mpcommunity.net/25565");
            let myData = await fetch("https://api.minetools.eu/ping/mc.hypixel.net/25565");
            const data = await myData.json();
            setOnline(data.players.online)
        }
        fetchData();
        const fetchInterval = setInterval(()=>{
            fetchData();
        }, 5000)

        return () => {
            clearInterval(fetchInterval)
        };
    },[])

    function copy(){
        window.navigator.clipboard.writeText("mc.mpcommunity.net")
        setCopyText("Copied!")
    }

    return (
        
            <div className="content">
                <img src={logo} alt="logo" className='logo' onClick={()=>navigate("/login")}/>

                <div className="text">
                    Play With 
                    <span className="server-players"> {online} </span>
                    players on
                    <span className="ip" onClick={()=>copy()} onMouseEnter={()=>setCopyText("Click To Copy Server IP")}> mc.mpcommunity.net<span className='click-to-copy'>{copyText}</span></span>
                </div>

                <div className="links">
                    <a href="https://discord.gg/CRwJRfF4wF" target="_blank" rel="noreferrer" className="item">
                        <img src={discord} alt="discord" className='discord' />
                        <span>Discord</span>
                    </a>
                    <a href="https://minecraftservers.org/server/637972" target="_blank" rel="noreferrer" className="item">
                        <img src={vote} alt="vote" className='vote'/>
                        <span>Vote</span>
                    </a>
                    <a href="https://discord.gg/MsgjbWNq2V" target="_blank" rel="noreferrer" className="item">
                        <img src={store} alt="store" className='store'/>
                        <span>STORE</span>
                    </a>
                    <div className="item" onClick={()=>navigate("/ranks")}>
                        <img src={ranks} alt="store" className='store'/>
                        <span>Ranks</span>
                    </div>
                    <div className="item" onClick={()=>navigate("/staff")}>
                        <img src={staff} alt="staff" className='staff'/>
                        <span>Staff</span>
                    </div>
                </div>
            
            </div>
    )
}
