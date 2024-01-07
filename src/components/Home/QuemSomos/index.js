import React from 'react';
import { styled } from '@mui/system';
import { Button, Grid } from '@mui/material';
import theme from '../../../Theme';
import Logo from "../../../data/Logo2.png"


const Root = styled('div')({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "70vh",
    backgroundColor: theme.palette.secondary.main,
    [theme.breakpoints.between('md', 'lg')]: {
        height: "100vh",
    },
    [theme.breakpoints.down('md')]: {
        boxSizing: 'border-box',
        width: "100%",
        height: "100vh",
        paddingInline: "20px"
    },
});

const FirstGrid = styled(Grid)({
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",

    [theme.breakpoints.down('md')]: {
        justifyContent: "center",
    },
});

const TextContainer = styled('div')({
    width: "606px",
    [theme.breakpoints.down('md')]: {
        width: "100%",
        display: "flex",
        flexDirection: "column",

    },
    [theme.breakpoints.between('md', 'lg')]: {
        width: "90%",
    },

    // [theme.breakpoints.up('xl')]: {
    //     width: "65%",
    // },
});

const Title = styled('h2')({
    fontFamily: 'Lora, serif',
    fontWeight: 400,
    lineWeight: "56.58px",
    fontSize: "44.2px",
    color: theme.palette.primary.main,
    [theme.breakpoints.between('md', 'lg')]: {
        fontSize: "33px",
    },
    [theme.breakpoints.down('md')]: {
        fontSize: "33px",
    },
});

const Paragraph = styled('p')({
    marginTop: "10%",
    color: "white",
    fontSize: "33.16px",
    fontWeight: 300,
    [theme.breakpoints.between('md', 'lg')]: {
        fontSize: "14px",
    },
    [theme.breakpoints.down('md')]: {
        fontSize: "14px",
    },
});

const StyledBtn = styled(Button)({
    marginTop: "3%",
    backgroundColor: theme.palette.primary.main,
    fontWeight: "bold",
    color: "#000", fontSize: "18.66px",
    textTransform: "none",
    width: "148px",
    height: "53px"
    // [theme.breakpoints.down('md')]: {
    //     width: "100%"
    // },
});
const QuemSomos = () => {
    return (
        <Root>
            <Grid container gap="4em" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                <FirstGrid item xs={12} md={4}>
                    <img src={Logo} alt="Logo" />
                </FirstGrid>
                <Grid item xs={12} md={6}>
                    <TextContainer>
                        <Title>
                            Quem é ESTRELLA & SUITA?
                        </Title>
                        <Paragraph>
                            <span style={{ fontFamily: 'Lora, serif', fontWeight: 400 }}>Estrella & Suita </span>é um escritório de advocacia focado em atender suas necessidades. Orgulhamo-nos de construir relacionamentos reais com nossos clientes e estabelecer parcerias de longo prazo com eles.
                        </Paragraph>
                        <StyledBtn variant="contained" >
                            Saiba Mais
                        </StyledBtn>
                    </TextContainer>
                </Grid>
            </Grid>
        </Root>
    )
}

export default QuemSomos