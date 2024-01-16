import React from "react";
import { styled } from "@mui/system";
import { Button, Grid } from "@mui/material";
import theme from "../Theme";
import Logo from "../data/Logo2.png";

const Root = styled("div")({
	display: "flex",
	justifyContent: "center",
	alignItems: "center",
	width: "100%",
	height: "100%",
	padding: "84px 0 84px 0",
	[theme.breakpoints.between("md", "lg")]: {
		height: "100%",
	},
	[theme.breakpoints.up("lg")]: {
		height: "90vh",
		padding: "0",
	},
	[theme.breakpoints.down("md")]: {
		boxSizing: "border-box",
		width: "100%",
		height: "100vh",
		paddingInline: "20px",
	},
});

const FirstGrid = styled(Grid)({
	display: "flex",
	justifyContent: "flex-end",
	alignItems: "center",

	[theme.breakpoints.down("md")]: {
		justifyContent: "center",
	},
	[theme.breakpoints.up("lg")]: {
		justifyContent: "center",
	},
});

const SecondGrid = styled(Grid)({
	[theme.breakpoints.between("md", "lg")]: {
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
	},
});

const StyledImg = styled("img")({
	width: "auto",
	height: "auto",

	[theme.breakpoints.between("md", "lg")]: {
		width: "250px",
		height: "250px",
	},

	[theme.breakpoints.down("md")]: {
		width: "150px",
		height: "150px",
	},
});

const TextContainer = styled("div")({
	width: "auto",
	[theme.breakpoints.down("sm")]: {
		width: "100%",
		display: "flex",
		flexDirection: "column",
	},
	[theme.breakpoints.between("md", "lg")]: {
		width: "90%",
	},
	// [theme.breakpoints.up('xl')]: {
	//     width: "65%",
	// },
});

const Title = styled("h2")({
	fontFamily: "Lora, serif",
	fontWeight: 400,
	lineWeight: "56.58px",
	fontSize: "44.2px",
	color: theme.palette.primary.main,
	[theme.breakpoints.between("md", "lg")]: {
		fontSize: "33px",
	},
	[theme.breakpoints.down("md")]: {
		fontSize: "33px",
	},
});

const Paragraph = styled("p")({
	marginTop: "10%",
	fontSize: "33.16px",
	fontWeight: 300,
	[theme.breakpoints.between("md", "lg")]: {
		fontSize: "16px",
	},
	[theme.breakpoints.down("md")]: {
		fontSize: "14px",
	},
});

const SobreNos = () => {
	return (
		<Root>
			<Grid
				container
				gap="4em"
				sx={{
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
				}}
			>
				<FirstGrid item xs={12} md={4}>
					<StyledImg src={Logo} alt="Logo" />
				</FirstGrid>
				<SecondGrid item xs={12} md={6}>
					<TextContainer>
						<Title>Quem é ESTRELLA & SUITA?</Title>
						<Paragraph>
							<span style={{ fontFamily: "Lora, serif", fontWeight: 400 }}>
								Estrella & Suita{" "}
							</span>
							é um escritório de advocacia focado em atender suas necessidades.
							Orgulhamo-nos de construir relacionamentos reais com nossos
							clientes e estabelecer parcerias de longo prazo com eles.
						</Paragraph>
					</TextContainer>
				</SecondGrid>
			</Grid>
		</Root>
	);
};

export default SobreNos;
