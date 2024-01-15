import React from "react";
import { styled } from "@mui/system";
import theme from "../Theme";
import Title from "../components/Global/GlobalStyles";
import Card from "../components/Advogados/Card";

//imagens do card
import CardImg from "../data/CardImg.png";
import CardImg_1 from "../data/CardImg_1.png";
import CardImg_2 from "../data/CardImg_2.png";
import CardImg_3 from "../data/CardImg_3.png";
import CardImg_4 from "../data/CardImg_4.png";
import CardImg_5 from "../data/CardImg_5.png";

const Root = styled("div")({
	width: "100%",
	display: "flex",
	flexDirection: "column",
	justifyContent: "center",
	alignItems: "center",
	height: "100%",
});

const CardContainer = styled("div")({
	width: "100%",
	display: "flex",
	flexDirection: "column",
	justifyContent: "center",
	alignItems: "center",
	gap: "61px",
	marginTop: "96px",
	[theme.breakpoints.down("lg")]: {
		marginTop: "150px",
		gap: "200px",
	},
});

const names = [
	"Jose da Silva",
	"Joisy da Silva",
	"Marianne Souza",
	"Gustavo de Oliveira",
	"Carla Machado",
];

const descriptions = [
	"“É com imensa satisfação que expresso minha profunda gratidão pelos serviços excepcionais prestados pela equipe de advogados deste escritório. Desde o momento em que me vi enfrentando questões jurídicas complexas, fui acolhido com profissionalismo, expertise e um compromisso inabalável com a busca da justiça.",
];
const imagens = [
	CardImg,
	CardImg_1,
	CardImg_2,
	CardImg_3,
	CardImg_4,
	CardImg_5,
];

const Advogados = () => {
	return (
		<Root>
			<Title
				style={{
					height: `auto + 15px`,
					borderBottom: `5px solid ${theme.palette.primary.main}`,
				}}
			>
				Nossos Advogados
			</Title>
			<CardContainer>
				{names.map((item, index) => {
					return (
						<Card
							name={item}
							description={descriptions}
							imagem={imagens[index]}
						/>
					);
				})}
			</CardContainer>
		</Root>
	);
};

export default Advogados;
