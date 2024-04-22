import React, { useState } from "react";
import { styled } from "@mui/system";
import { Typography } from "@mui/material";
import BtnLeft from "./BtnLeft.svg";
import BtnRight from "./BtnRight.svg";
import theme from "../../../Theme";

const Root = styled("div")({
	display: "flex",
	width: "100%",
	gap: "5px",
	[theme.breakpoints.down("md")]: {
		width: "70%",
	},
});

const Buttons = ({ count, setCount }) => {
	const [maxImg, setMaxImg] = useState(4);

	const prevImg = () => {
		if (count > 1) {
			setCount(count - 1);
		}
	};

	const nextImg = () => {
		if (count < maxImg) {
			setCount(count + 1);
		} else {
			setCount(0)
		}
	};

	return (
		<Root>
			<img
				src={BtnLeft}
				onClick={() => {
					prevImg();
				}}
				style={{ cursor: "pointer" }}
			/>
			<Typography
				style={{ fontSize: "18.66px", fontWeight: "800", color: "white" }}
			>
				<span style={{ color: theme.palette.primary.main }}>{`0${count + 1}`}</span>
				/05
			</Typography>
			<img
				src={BtnRight}
				onClick={() => {
					nextImg();
				}}
				style={{ cursor: "pointer" }}
			/>
		</Root>
	);
};

export default Buttons;
