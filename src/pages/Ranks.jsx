import React from 'react'
import { useNavigate } from "react-router-dom";
import arrow from "../media/arrow.png"
import "../styles/ranks.css"
import { Container } from '@mui/system';
import { Typography, Stack, Card, Divider } from '@mui/material';


export default function Ranks() {
    const navigate = useNavigate();

    const classes = {
        card:{
            backgroundColor: "rgb(0,0,0,0.5)",
            borderRadius: "50px",
            padding: "30px"
        },
        typography:{
            fontFamily: "'Poppins', sans-serif",
            color: "white",
            background: "-webkit-linear-gradient( 92deg, #95d7e3, #eb76ff )",
            backgroundSize:"600vw 600vw",
            backgroundClip: "text",
            textFillColor: "transparent",
            animation: "textAnimate 5s linear infinite alternate"
        },
        divider:{
            width: "100px",
            height: "10px",
            backgroundColor: "gold",
            borderRadius: "10px",
            marginTop: "10px"
        },
        priceStack:{
            direction:"row",
            justifyContent:"center",
            alignItems:"flex-end",
            gap:"1"
        }
    }

    const ranks = [{
        name: "VIP",
        price: "5$"
    },{
        name: "VIP+",
        price: "5$"
    }
    ]

    return (
        <Container sx={{marginBottom:"40px"}}>
            <div className="back" onClick={()=>navigate("/")}>
                <img src={arrow} alt="arrow"/>
            </div>
            <div className="ranks">
                {/* <section>
                    <h1 className='magic-items'>Magic Items</h1>
                    <div className="items">
                        <div className="item">
                            <img src={require("../media/magicitems.png")} alt="magictools" />
                        </div>
                    </div>
                </section>
                <section>
                    <h1 className='super-items'>Super Tools</h1>
                    <div className="items">
                        <div className="item">
                            <img src={require("../media/supertools.png")} alt="supertools" />
                        </div>
                    </div>
                </section> */}
                <section>
                    <h1 className='super-items'>Ranks</h1>
                    <Stack
                        direction="row"
                        alignItems="center"
                        justifyContent="center"
                        color="white"
                        gap="50px"
                    >
                        {ranks.map(rank=>
                            <Card sx={classes.card}>
                                <Stack
                                    gap={1}
                                    alignItems="center"
                                >
                                    <Typography variant='h4' sx={classes.typography}>{rank.name}</Typography>
                                    <img src={require(`../media/crown.png`)} alt="" width="100px" />
                                    <Stack sx={classes.priceStack}>
                                        <Typography variant='h3' sx={classes.typography}>{rank.price}</Typography>
                                        <Typography variant='h6' sx={classes.typography} >/ Season</Typography>
                                    </Stack>
                                    <Divider sx={classes.divider}></Divider>
                                </Stack>
                            </Card>
                        )}
                    </Stack>
                </section>
            </div>
    </Container>
    )
}