import React from 'react';
import { styled } from '@mui/system';
import { Card, CardMedia, CardContent, Typography, CardActions, Button } from '@mui/material';


const MuiCard = styled(Card)({
    maxWidth: "278px",
    minHeight: "fit-content",
    borderRadius: "10px",
    border: "1px solid #D4B99E",
    boxShadow: "none",
});

const CardItem = ({ Imagem, item, servicesDescriptions, index }) => {
    return (
        <MuiCard sx={{ maxWidth: "278px", minHeight: "fit-content", borderRadius: "10px", border: "1px solid #D4B99E", boxShadow: "none" }} key={index}>
            <CardMedia
                sx={{ height: 140 }}
                image={Imagem}
                title="Serviços"
            />
            <CardContent style={{ paddingInline: "32px", paddingBottom: "1em" }}>
                <Typography gutterBottom variant="h5" component="div" style={{ fontSize: "18.66px", fontWeight: 800 }}>
                    {item}
                </Typography>
                <Typography variant="body2" color="text.secondary" style={{ fontSize: "14px", fontWeight: 400, marginTop: "1em", color: "#000" }}>
                    {servicesDescriptions}
                </Typography>
                <CardActions style={{ margin: 0, paddingLeft: 0 }}>
                    <Button size="small" style={{ textTransform: "none", margin: 0, fontSize: "14px", fontWeight: 800, color: "#000" }}>Leia Mais</Button>
                </CardActions>
            </CardContent>

        </MuiCard>
    )
}

export default CardItem;