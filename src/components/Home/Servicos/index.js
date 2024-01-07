import React from 'react';
import { styled } from '@mui/system';
import { Divider } from '@mui/material';
import theme from '../../../Theme';
import Imagem from "../../../data/cardImg.jpg"
import CardItem from './Card';


const Root = styled('div')({
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"

});

const Container = styled('div')({
    width: "80%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"

});


const TitleContainer = styled('div')({
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: "48px"
});

const Title = styled('h2')({
    fontSize: "44.2px",
    fontStyle: "normal",
    fontWeight: 800,
    margin: 0
});

const DividerStyled = styled(Divider)({
    width: "80%",
    height: "7px",
    flexShrink: 0,
    borderRadius: "20px",
    background: "#D4B99E",
    border: "none",
    marginTop: "1%"
});

const CardsContainer = styled('div')({
    width: "100%",
    height: "100%",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    gap: "66px",
    paddingTop: "84px",
});



const services = ['Direito Empresarial', 'Direito Empresarial', 'Direito Empresarial', 'Direito Empresarial', 'Direito Empresarial', 'Direito Empresarial'];

const servicesDescriptions = ['Somos um escritório de advocacia especialista em Direito Empresarial. Contamos com uma equipe altamente qualificada e pronta para defender seus direitos.']

const Servicos = () => {
    return (
        <Root>
            <Container>
                <TitleContainer>
                    <Title>Como podemos te ajudar?</Title>
                    <DividerStyled />
                </TitleContainer>
                <CardsContainer>
                    {services.map((item, index) => {
                        return (
                            <CardItem Imagem={Imagem} item={item} servicesDescriptions={servicesDescriptions} index={index} />
                        )
                    })}
                </CardsContainer>

            </Container>
        </Root>
    )
}

export default Servicos