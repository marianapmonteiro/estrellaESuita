import React from "react";
import { styled } from "@mui/system";
import { Divider } from "@mui/material";
import theme from "../../../Theme";
import Title from "../../Global/GlobalStyles";
import Card from "./Card";

const Root = styled("div")({
	width: "100%",
	display: "flex",
	justifyContent: "center",
	alignItems: "center",
	marginTop: "52px",
	// [theme.breakpoints.down("md")]: {
	// 	width: "70%",
	// },
});

const Container = styled("div")({
	width: "80%",
	display: "flex",
	flexDirection: "column",
	justifyContent: "center",
	alignItems: "center",

	// [theme.breakpoints.down("md")]: {
	// 	width: "70%",
	// },
});

const CardContainer = styled("div")({
	display: "flex",
	flexWrap: "wrap",
	justifyContent: "center",
	alignItems: "center",
	gap: "92px",
});

const clientes = [
	"Joise da Silva",
	"Joise da Silva",
	"Joise da Silva",
	"Joise da Silva",
];

const descriptions = [
	"“É com imensa satisfação que expresso minha profunda gratidão pelos serviços excepcionais prestados pela equipe de advogados deste escritório. Desde o momento em que me vi enfrentando questões jurídicas complexas, fui acolhido com profissionalismo, expertise e um compromisso inabalável com a busca da justiça. A competência demonstrada por cada membro da equipe foi notável, proporcionando-me confiança e tranquilidade durante todo o processo. \nA clareza nas explicações, a atenção aos detalhes e a prontidão para responder às minhas dúvidas foram elementos fundamentais que destacaram o profissionalismo da Estella&Suita.”",
];

const index = () => {
	return (
		<Root>
			<Container>
				<Title style={{ marginBottom: "150px" }}>
					Depoimentos de nossos{" "}
					<span
						style={{
							borderBottom: `7px solid ${theme.palette.primary.main} `,
						}}
					>
						clientes
					</span>
				</Title>
				<CardContainer>
					{clientes.map((item) => {
						return <Card title={item} description={descriptions} />;
					})}
				</CardContainer>
			</Container>
		</Root>
	);
};

export default index;
