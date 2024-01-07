import React from 'react'
import { styled } from '@mui/system';
import { Typography } from '@mui/material';
import theme from '../../Theme';
import languageImg from '../../data/language.png'
import List from './List'
//Icons Redes sociais
import twitter from '../../data/twitter.png'
import instagram from '../../data/instagram.png'
import linkedin from '../../data/linkedin.png'
import youtube from '../../data/youtube.png'
import tiktok from '../../data/tiktok.png'
import facebook from '../../data/facebook.png'
import threads from '../../data/threads.png'


const Root = styled('div')({
    position: "relative",
    bottom: 0,
    width: "100%",
    height: "359px",
    backgroundColor: theme.palette.secondary.main,
    [theme.breakpoints.down('sm')]: {
        height: "fit-content",
        position: "relative",
    },

});

const Container = styled('div')({
    paddingTop: '33px',
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    gap: "32px"
});

const Categories = styled('div')({
    width: "80%",
    height: "auto",
    display: "flex",
    flexWrap: "wrap",
    gap: '5em',
    [theme.breakpoints.down('sm')]: {
        gap: '1em',
    },
});

const TopBorder = styled('div')({
    width: "100vw",
    borderTop: `1px solid ${theme.palette.primary.main}`,
    position: "absolute",
    top: 0,
});

const Bottom = styled('div')({
    width: "80%",
    display: "flex",
    flexDirection: "column",
    // borderTop: `1px solid ${theme.palette.primary.main}`,
    position: "absolute",
    bottom: "17px",
    [theme.breakpoints.down('sm')]: {
        position: "relative",
    },
});

const BottomContainer = styled('div')({
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginTop: "14.5px",
    [theme.breakpoints.down('sm')]: {
        flexDirection: "column",
        flexWrap: "wrap",
        gap: "1em"
    },
});

const BottomItem = styled('div')({
    display: "flex",
    flexWrap: "wrap",
    gap: "16px",
    justifyContent: "center",
    alignItems: "center",
    [theme.breakpoints.down('sm')]: {
        flexDirection: "column",
        alignItems: "flex-start",
    },

});

const TextBottom = styled(Typography)({
    color: "white",
    fontSize: "14px",
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: "normal"
});

const Imgs = styled('div')({
    display: "flex",
    gap: "16px"
});

const redesSociais = [twitter, instagram, linkedin, youtube, tiktok, facebook, threads];

const AtendimentoLi = ['Apoio à pessoa com deficiência', 'Reporte um problema', 'Entre em contato conosco']
const ServicosLi = ['Direito Civil', 'Direito Penal', 'Direito Administrativo', 'Direito do Trabalho', 'Direito Empresarial', 'Direito Internacional', 'Direito da Propriedade Intelectual', 'Direito do Consumidor', 'Direito da Família e Sucessões']
const FuncionamentoLi = ['Sobre Nós', 'Advogados', 'Guias', 'Blog', 'Políticas da Estella&Suita', 'Política de privacidade', 'LGPD', 'Termos de serviço', 'Configuração de cookies']


const index = () => {
    return (
        <Root>
            <Container>
                <Categories>
                    <List title="Atendimento" list={AtendimentoLi} />
                    <List title="Serviços" list={ServicosLi} />
                    <List title="Como funcionamos" list={FuncionamentoLi} />
                </Categories>
                <Bottom>
                    <TopBorder />
                    <BottomContainer>
                        <BottomItem>
                            <img src={languageImg} />
                            <TextBottom>Português (BR)</TextBottom>
                        </BottomItem>
                        <BottomItem>
                            <TextBottom style={{ fontWeight: "700" }}>Siga-nos em nossas redes:</TextBottom>
                            <Imgs>
                                {redesSociais.map((item) => {
                                    return (
                                        <img src={item} key={index} />
                                    )
                                })}
                            </Imgs>
                        </BottomItem>
                    </BottomContainer>
                </Bottom>
            </Container>
        </Root>
    )
}

export default index
