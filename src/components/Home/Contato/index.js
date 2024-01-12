import React, { useRef, useEffect, useState } from "react";
import { styled } from "@mui/system";
import theme from "../../../Theme";
import { Divider, Typography, TextField, Button } from "@mui/material";
import Title from "../../Global/GlobalStyles";

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

const DividerStyled = styled("div")({
	width: "80%", // Ajuste a largura conforme necessário
	height: "4px", // Ajuste a altura conforme necessário
	borderRadius: "20px",
	background: "#D4B99E",
	marginTop: "10px", // Ajuste a margem conforme necessário
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

const campos = ["Nome:", "Seu melhor e-mail:", "Tópico:"];

const Index = () => {
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

export default Index;
