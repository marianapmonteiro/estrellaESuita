import React from "react";
import { styled } from "@mui/system";
import theme from "../../Theme";

//Home
const Title = styled("h2")({
	fontSize: "44.2px",
	fontStyle: "normal",
	fontWeight: 800,
	margin: 0,
	marginTop: "49px",

	[theme.breakpoints.down("sm")]: {
		fontSize: "25px",
	},
});

export default Title;
