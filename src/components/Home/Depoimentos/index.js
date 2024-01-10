import React from "react";
import { styled } from "@mui/system";
import { Divider } from "@mui/material";
import theme from "../../../Theme";
import Title from "../../Global/GlobalStyles";

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
	justifyContent: "center",
	alignItems: "center",
	// [theme.breakpoints.down("md")]: {
	// 	width: "70%",
	// },
});

const DividerStyled = styled(Divider)({
	width: "10%",
	height: "7px",
	flexShrink: 0,
	borderRadius: "20px",
	background: "#D4B99E",
	border: "none",
	marginTop: "1%",
});

const index = () => {
	return (
		<Root>
			<Container>
				<Title>
					Depoimentos de nossos{" "}
					<span
						style={{
							borderBottom: `7px solid ${theme.palette.primary.main} `,
						}}
					>
						clientes
					</span>
				</Title>
			</Container>
		</Root>
	);
};

export default index;
