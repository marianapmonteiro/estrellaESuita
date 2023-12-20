import React from 'react'
import { styled } from '@mui/system';
import { Typography } from '@mui/material';
import Logo from '../../data/Logo.png'
import theme from '../../Theme';


const Root = styled('div')({
    width: "100%",
    position: "absolute",
    zIndex: 1000,
    boxSizing: 'border-box',
    paddingLeft: '5%',
    paddingRight: '10%',
    background: "rgba(0, 0, 0, 0.80)",
    filter: "blur(0px)",
    height: "97px",
    flexShrink: 0,

});

const Container = styled('div')({
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    textAlign: "center"

});

const Menu = styled('div')({
    display: "flex",
    gap: "50px",
    [theme.breakpoints.down('md')]: {
        display: "none"
    },
});

const Btn = styled(Typography)({
    color: "#FFF",
    fontSize: "18.66px",
    fontWeight: 700,
    cursor: "pointer",
    "&:hover": {
        color: theme.palette.primary.main
    }

});
const categorias = ['Nossos Advogados', 'Serviços', 'Sobre nós', 'Contato'];


const Navbar = () => {
    return (
        <Root>
            <Container>
                <div style={{ marginBottom: "10px" }}>
                    <img src={Logo} alt="Logo" />
                </div>
                <Menu>
                    {categorias.map((item) => {
                        return (
                            <Btn>{item}</Btn>
                        )
                    })}
                </Menu>
            </Container>
        </Root>
    )
}

export default Navbar
