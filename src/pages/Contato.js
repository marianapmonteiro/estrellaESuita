import React from "react";
import { styled } from "@mui/system";
import theme from "../Theme";
import { Typography, Button } from "@mui/material";
import Title from "../components/Global/GlobalStyles";

const Root = styled("div")({
	width: "100%",
	display: "flex",
	justifyContent: "center",
	alignItems: "center",
	marginTop: "52px",
});

const Container = styled("div")({
	width: "80%",
	display: "flex",
	justifyContent: "center",
	alignItems: "center",
	flexDirection: "column",
});

const TitleContainer = styled("div")({
	width: "100%",
	height: "100%",
	display: "flex",
	flexDirection: "column",
	alignItems: "center",
	marginTop: "48px",
});

const FormContainer = styled("div")({
	width: "80%",
	height: "100%",
	display: "flex",
	flexDirection: "column",
	alignItems: "center",
	justifyContent: "center",
	marginTop: "48px",
	gap: "38px",
	paddingTop: "98px",
});

const FormDiv = styled("div")({
	width: "100%",
	height: "100%",
	display: "flex",
	alignItems: "center",
	justifyContent: "flex-start",
	gap: "10px",
	// backgroundColor: "pink",
	[theme.breakpoints.down("sm")]: {
		flexDirection: "column",
		alignItems: "flex-start",
	},

	// marginTop: "55px",
});

const FormTitle = styled(Typography)({
	fontSize: "24.88px",
	[theme.breakpoints.down("sm")]: {
		fontSize: "16px",
	},

	// marginTop: "55px",
});

const StyledButton = styled(Button)({
	borderRadius: "10px",
	background: theme.palette.primary.main,
	width: "190px",
	height: "60px",
	flexShrink: 0,
	textTransform: "none",
	boxShadow: "none",
	marginTop: "35px",
	[theme.breakpoints.down("sm")]: {
		height: "auto",
	},
});

const ButtonDiv = styled("div")({
	display: "flex",
	width: "100%",
	justifyContent: "flex-end",
});

const TextContainer = styled("div")({
	display: "flex",
	maxWidth: "778px",
	justifyContent: "center",
	alignItems: "center",
	paddingTop: "97px",
	[theme.breakpoints.down("sm")]: {
		maxWidth: "80%",
	},
});

const Text = styled("h3")({
	color: "#000",
	fontFamily: "Lora",
	fontSize: "33.16px",
	fontStyle: "normal",
	fontWeight: 400,
	lineHeight: "normal",
	[theme.breakpoints.down("sm")]: {
		fontSize: "18px",
	},
});

const campos = ["Nome:", "Seu melhor e-mail:", "Tópico:"];

const Contato = () => {
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
						Entre em contato conosco
					</Title>
				</TitleContainer>
				<TextContainer>
					<Text>
						<span style={{ fontWeight: 600 }}>Estrella & Suita</span> é um
						escritório de advocacia focado em atender suas necessidades.
						<br />
						<br /> Para entrar em contato conosco preencha esse formulário
						abaixo ou envie-nos um e-mail para:
						<span style={{ fontWeight: 600 }}>
							estrellasuita.adv@gmail.com
						</span>{" "}
						ou entre em contato por via whatsapp:{" "}
						<span style={{ fontWeight: 600 }}>+33 6 46 812204</span> teremos o
						prazer de atendê-lo bem.
					</Text>
				</TextContainer>
				<FormContainer>
					{campos.map((item) => {
						return (
							<FormDiv>
								<FormTitle>{item}</FormTitle>
								<input
									type={item === "Seu melhor e-mail:" ? "email" : "text"}
									style={{
										borderRadius: "10px",
										border: "1px solid #000",
										height: "58px",
										width: "100%",
										paddingLeft: "10px",
									}}
								/>
							</FormDiv>
						);
					})}
					<FormDiv style={{ alignItems: "flex-start" }}>
						<FormTitle>Mensagem:</FormTitle>
						<textarea
							type="text"
							style={{
								minHeight: "357px",
								borderRadius: "10px",
								border: "1px solid #000",
								width: "100%",
								paddingLeft: "10px",
								paddingTop: "10px",
							}}
						/>
					</FormDiv>
					<ButtonDiv>
						<StyledButton variant="contained">
							<Typography
								sx={{
									fontSize: "24.88px",
									fontWeight: 700,

									[theme.breakpoints.down("sm")]: {
										fontSize: "16px",
									},
								}}
							>
								Enviar
							</Typography>
						</StyledButton>
					</ButtonDiv>
				</FormContainer>
			</Container>
		</Root>
	);
};

export default Contato;
