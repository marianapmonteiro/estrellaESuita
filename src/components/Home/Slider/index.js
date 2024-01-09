import React, { useState } from "react";
import { styled } from "@mui/system";
import { Typography, Button } from "@mui/material";
import theme from "../../../Theme";
import Img1 from "../../../data/slideImagem1.jpg";
import Img2 from "../../../data/slideImagem2.jpg";
import Img3 from "../../../data/slideImagem3.jpg";
import Img4 from "../../../data/slideImagem4.jpg";
import Buttons from "./Buttons";

const Root = styled("div")({
	width: "100%",
	height: "100vh",
	flexShrink: 0,
	boxSizing: "border-box",
	position: "relative",
});

const BgImg = styled("div")({
	width: "100%",
	height: "100vh",
	transition: "background-image linear 0.5s",
	filter: "grayscale(100%)",
});

const Box = styled("div")({
	top: "42%",
	right: 0,
	width: "35%",
	position: "absolute",
	background: "rgba(0, 0, 0, 0.67)",
	borderLeft: `10px solid ${theme.palette.primary.main}`,
	display: "flex",
	justifyContent: "flex-start",
	alignItems: "center",
	[theme.breakpoints.down("md")]: {
		width: "70%",
		height: "fit-content",
		top: "50%",
		paddingTop: "20px",
		paddingBottom: "20px",
		paddingRight: "20px",
	},
	[theme.breakpoints.between("md", "lg")]: {
		width: "50%",
		height: "fit-content",
		top: "50%",
		paddingTop: "20px",
		paddingBottom: "20px",
		paddingRight: "20px",
	},
});
const BoxContent = styled("div")({
	width: "70%",
	paddingLeft: "10%",
	paddingTop: "5%",
	paddingBottom: "5%",
	display: "flex",
	flexDirection: "column",
	gap: "30px",
	[theme.breakpoints.down("md")]: {
		width: "fit-content",
		marginTop: 0,
		gap: "5px",
	},
});
const Text = styled(Typography)({
	fontSize: "44.2px",
	// [theme.breakpoints.down("md")]: {
	// 	fontSize: "18.66",
	// },
	[theme.breakpoints.down("sm")]: {
		fontSize: "16px",
	},
});

const CarouselBtns = styled(Typography)({
	position: "absolute",
	bottom: 0,
	paddingBottom: "30px",
	left: "50%",
	transform: "translateX(-50%)",
});

const Imagens = ["", Img1, Img2, Img3, Img4, Img3];

const Slider = () => {
	const [active, setActive] = useState(1);

	return (
		<Root>
			<BgImg
				style={{
					background: `url(${Imagens[active]}) lightgray 0.633px -12.612px / 101.75% 121.137% no-repeat`,
				}}
			></BgImg>
			<Box>
				<BoxContent>
					<Text>
						<span
							style={{ color: theme.palette.primary.main, fontWeight: "800" }}
						>
							A{" "}
						</span>
						<span style={{ color: "#FFF", fontWeight: "900" }}>verdade</span>
						<span
							style={{ color: theme.palette.primary.main, fontWeight: "800" }}
						>
							{" "}
							é o braço forte da{" "}
						</span>
						<span style={{ color: "#FFF", fontWeight: "900" }}>Justiça</span>
						<span
							style={{ color: theme.palette.primary.main, fontWeight: "800" }}
						>
							.
						</span>
					</Text>
					<Button
						variant="contained"
						sx={{
							backgroundColor: theme.palette.primary.main,
							borderRadius: "10px",
							color: "black",
							fontWeight: "800",
							textTransform: "none",
							width: "120px",
							height: "34px",
							[theme.breakpoints.down("sm")]: {
								fontSize: "12px",
								marginTop: "8%",
							},
							[theme.breakpoints.between("sm", "md")]: {
								marginTop: "8%",
								fontSize: "18px",
								paddingTop: "24px",
								paddingBottom: "24px",
							},
						}}
					>
						Explore
					</Button>
				</BoxContent>
			</Box>
			{/* //estao causando em mobile o overflow x, alterar */}
			<CarouselBtns>
				<Buttons count={active} setCount={setActive} />
			</CarouselBtns>
		</Root>
	);
};

export default Slider;
