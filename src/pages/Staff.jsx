import React from 'react'
import "../styles/staff.css"
import { useNavigate } from "react-router-dom";
import arrow from "../media/arrow.png"
import { Container } from '@mui/system';
import { Grid } from '@mui/material';
import Skeleton from '@mui/material/Skeleton';
import { useState } from 'react';

export default function Staff() {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true)

    const classes = {
        grid: {
            maxWidth: {
                xs: "100%",
                xl: "33.3333%"
            }
        }
    }

    const staff = [
        {
            name:"1MPS",
            ign:"mo7amedplaystart",
            icon:"crown",
            rank:"Owner"
        },
        {
            name:"IISG",
            ign:"II_SG",
            icon:"crown",
            rank:"CEO"
        },
        {
            name:"NotMudee",
            ign:"NotMudee",
            icon:"crown",
            rank:"CTO"
        },
        {
            name:"HazemPlay",
            ign:"9420d7c1-6bf7-4320-ab74-8dc0bc24a6e5",
            icon:"emerald",
            rank:"Manager"
        },
        {
            name:"GhostGamer",
            ign:"5364b5ba-0bea-4dde-9ce0-96db22411466",
            icon:"emerald",
            rank:"SirMod"
        },
        {
            name:"Matrix",
            ign:"ANA_MATRIX__",
            icon:"emerald",
            rank:"Moderator"
        },
        {
            name:"Mohammed",
            ign:"12c4e186-5700-4237-a6b8-56c05f72aab1",
            icon:"emerald",
            rank:"Moderator"
        },
        {
            name:"2m2m",
            ign:"2m2m",
            icon:"emerald",
            rank:"Moderator"
        },
        {
            name:"Ronay",
            ign:"RonayX",
            icon:"diamond",
            rank:"Helper"
        },
        {
            name:"Mark",
            ign:"xmarksafwatx",
            icon:"diamond",
            rank:"Helper"
        },
        {
            name:"IIkhaledII",
            ign:"IIkhaledII",
            icon:"diamond",
            rank:"Helper"
        },
    ]


    return (
            <Container 
                maxWidth="xl"
                sx={{marginTop: "65px"}}
                >
                <div className="back" onClick={()=>navigate("/")}>
                    <img src={arrow} alt="arrow"/>
                </div>
                <Grid 
                    container 
                    justifyContent="center"
                    spacing={5}
                    className="cards"
                    >
                    {staff.map((e)=>{return(
                        <Grid item xs={12} sm={4} md={4} key={e.ign} sx={classes.grid}>
                            <div className={`staff-card ${e.rank} glow-on-hover`}>
                                {loading && <Skeleton variant="rounded" animation="wave" width={160} height={160} sx={{backgroundColor: "gray"}}/>}
                                <img src={`https://mc-heads.net/avatar/${e.ign}/160`} alt="head" onLoad={()=>setLoading(false)}/>
                                <div className="info">
                                    <span className="name">{e.name}</span>
                                    <div className='rank'>
                                        <img src={require(`../media/${e.icon}.png`)} alt="" width={"35"}/>
                                        <span className="rank">{e.rank}</span>
                                    </div>
                                </div>
                            </div>
                        </Grid>
                    )
                    })}
                </Grid>
            </Container>
    )
}