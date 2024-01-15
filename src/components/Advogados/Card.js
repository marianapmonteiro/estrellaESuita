import React from "react";
import { styled } from "@mui/system";
import theme from "../../Theme";

const Root = styled("div")({
	maxWidth: "60%",
	borderRadius: "36px",
	padding: "14px 42px 22px 96px",
	border: "3px solid black",
	justifyContent: "center",
	alignItems: "center",
	position: "relative",
	marginTop: "35px",
	[theme.breakpoints.down("md")]: {
		maxWidth: "80%",
		justifyContent: "flex-start",
		alignItems: "flex-start",
		// padding: "30px",
		padding: "20px",
		height: "100%",
	},
});

const Title = styled("h3")({
	fontSize: "33.16px",
	fontFamily: "Lora",
	fontWeight: 700,
	textAlign: "center",
	margin: 0,
});

const TitleContainer = styled("div")({
	width: "100%",
	display: "flex",
	justifyContent: "space-between",
	alignItems: "center",
	marginBottom: "17px",
	// paddingBottom: "17px",
	// height: "fit-content",
	[theme.breakpoints.down("lg")]: {
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center",
		width: "100%",
	},
});

const Paragraph = styled("h4")({
	fontSize: "18.66px",
	fontFamily: "Inter",
	fontWeight: 400,
	maxHeight: "115px",
	[theme.breakpoints.down("lg")]: {
		maxHeight: "fit-content",
	},
});

const Img = styled("img")({
	position: "absolute",
	left: "-10%",
	top: "50%",
	transform: "translateY(-50%)",
	[theme.breakpoints.down("md")]: {
		left: "50%",
		top: "-23%",
		transform: "translateX(-50%)",
	},
});

const Card = ({ name, description, imagem }) => {
	return (
		<Root>
			<Img src={imagem} alt="Imagem advogado especialista" />
			<TitleContainer>
				<Title>{name}</Title>
				<p>Especialista em Direito Civil</p>
			</TitleContainer>

			<Paragraph>{description}</Paragraph>
		</Root>
	);
};

export default Card;
