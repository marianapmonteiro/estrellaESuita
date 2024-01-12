import React from "react";
import { styled } from "@mui/system";
import theme from "../../../Theme";
import CardImg from "../../../data/CardImg.png";

const Root = styled("div")({
	maxWidth: "433px",
	borderRadius: "36px",
	padding: "40px 29px 40px",
	border: "3px solid black",
	justifyContent: "center",
	alignItems: "center",
	position: "relative",
	marginTop: "35px",
	// [theme.breakpoints.down("md")]: {
	// 	width: "70%",
	// },
});

const Title = styled("h3")({
	fontSize: "33.16px",
	fontFamily: "Lora",
	fontWeight: 700,
	textAlign: "center",

	// [theme.breakpoints.down("md")]: {
	// 	width: "70%",
	// },
});

const Paragraph = styled("h4")({
	fontSize: "18.66px",
	fontFamily: "Inter",
	fontWeight: 400,

	// [theme.breakpoints.down("md")]: {
	// 	width: "70%",
	// },
});

const Img = styled("img")({
	position: "absolute",
	top: "-15%",
	left: "50%",
	transform: "translateX(-50%)",
	margin: "0 auto",
	zIndex: "2",
	[theme.breakpoints.down("sm")]: {
		top: "-10%",
	},
});

const CircleBorder = styled("div")({
	width: "135px",
	height: "130px",
	backgroundColor: "white",
	position: "absolute",
	top: "-13%",
	paddingInline: "20px",
	left: "50%",
	transform: "translateX(-50%)",
	margin: "0 auto",
	borderRadius: "50%",
	zIndex: "1",
	clipPath: "ellipse(53% 100% at 50% 100%)",
	border: "3px solid black",
	[theme.breakpoints.down("sm")]: {
		top: "-8.5%",
	},
});

const Card = ({ title, description }) => {
	return (
		<Root>
			<Img src={CardImg} alt="Imagem do card de depoimentos de clientes" />
			<CircleBorder />
			<Title>{title}</Title>
			<Paragraph>{description}</Paragraph>
		</Root>
	);
};

export default Card;
