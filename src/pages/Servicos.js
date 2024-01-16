import React from "react";
import { styled } from "@mui/system";
import { Divider, Typography } from "@mui/material";
import theme from "../Theme";
import Imagem from "../data/cardImg.jpg";
import CardItem from "../components/Home/Servicos/Card";
import Title from "../components/Global/GlobalStyles";

const Root = styled("div")({
	width: "100%",
	display: "flex",
	flexDirection: "column",
	justifyContent: "center",
	alignItems: "center",
});

const Container = styled("div")({
	width: "80%",
	height: "100%",
	display: "flex",
	flexDirection: "column",
	justifyContent: "center",
	alignItems: "center",
});

const TitleContainer = styled("div")({
	width: "100%",
	height: "100%",
	display: "flex",
	flexDirection: "column",
	alignItems: "center",
	marginTop: "48px",
	[theme.breakpoints.down("sm")]: {
		alignItems: "flex-start",
	},
});

const CardsContainer = styled("div")({
	width: "100%",
	height: "100%",
	display: "flex",
	flexWrap: "wrap",
	justifyContent: "center",
	alignItems: "center",
	gap: "66px",
	paddingTop: "84px",
});

const LastDiv = styled("div")({
	width: "100%",
	display: "flex",
	paddingTop: "48px",
	alignItems: "center",
	justifyContent: "flex-end",
	paddingRight: "10%",
});

const services = [
	"Direito Empresarial",
	"Direito Empresarial",
	"Direito Empresarial",
	"Direito Empresarial",
	"Direito Empresarial",
	"Direito Empresarial",
];

const servicesDescriptions = [
	"Somos um escritório de advocacia especialista em Direito Empresarial. Contamos com uma equipe altamente qualificada e pronta para defender seus direitos.",
];

const Servicos = () => {
	return (
		<Root>
			<Container>
				<TitleContainer>
					<Title
						style={{
							height: `auto + 15px`,
							borderBottom: `5px solid ${theme.palette.primary.main}`,
						}}
					>
						Serviços
					</Title>
				</TitleContainer>
				<CardsContainer>
					{services.map((item, index) => {
						return (
							<CardItem
								Imagem={Imagem}
								item={item}
								servicesDescriptions={servicesDescriptions}
								index={index}
							/>
						);
					})}
				</CardsContainer>
				<LastDiv>
					<Typography style={{ fontSize: "18.66px", fontWeight: 800 }}>
						Mais Serviços
					</Typography>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="167"
						height="24"
						viewBox="0 0 167 24"
						fill="none"
					>
						<path
							d="M2 10.5C1.17157 10.5 0.5 11.1716 0.5 12C0.5 12.8284 1.17157 13.5 2 13.5L2 10.5ZM166.061 13.0607C166.646 12.4749 166.646 11.5251 166.061 10.9393L156.515 1.3934C155.929 0.807611 154.979 0.807611 154.393 1.3934C153.808 1.97919 153.808 2.92893 154.393 3.51472L162.879 12L154.393 20.4853C153.808 21.0711 153.808 22.0208 154.393 22.6066C154.979 23.1924 155.929 23.1924 156.515 22.6066L166.061 13.0607ZM2 13.5L165 13.5V10.5L2 10.5L2 13.5Z"
							fill="#D4B99E"
						/>
					</svg>
				</LastDiv>
			</Container>
		</Root>
	);
};

export default Servicos;
