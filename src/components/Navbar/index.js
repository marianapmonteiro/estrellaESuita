import React from "react";
import { styled } from "@mui/system";
import { Typography } from "@mui/material";
import Logo from "../../data/Logo.png";
import theme from "../../Theme";
import MenuIcon from "@mui/icons-material/Menu";

const Root = styled("div")(({ isHomePage }) => ({
	width: "100%",
	position: isHomePage ? "absolute" : "static",
	zIndex: 1000,
	boxSizing: "border-box",
	paddingLeft: "5%",
	paddingRight: "10%",
	background: "rgba(0, 0, 0, 0.80)",
	filter: "blur(0px)",
	height: "97px",
	flexShrink: 0,
}));

const Container = styled("div")({
	width: "100%",
	height: "100%",
	display: "flex",
	justifyContent: "space-between",
	alignItems: "center",
	textAlign: "center",
});

const Menu = styled("div")({
	display: "flex",
	gap: "50px",
	[theme.breakpoints.down("ipadMini")]: {
		display: "none",
	},
});

const MenuMobile = styled("div")({
	display: "none",
	color: "white",
	[theme.breakpoints.down("ipadMini")]: {
		display: "flex",
	},
});

const Btn = styled(Typography)({
	color: "#FFF",
	fontSize: "18.66px",
	fontWeight: 700,
	cursor: "pointer",
	borderBottom: `2px solid transparent`,
	"&:hover": {
		color: theme.palette.primary.main,
		borderBottom: `2px solid ${theme.palette.primary.main}`,
	},
});
const categorias = ["Nossos Advogados", "Serviços", "Sobre nós", "Contato"];

const toPage = ({ index }) => {
	if (index === 0) {
		window.location.href = "/advogados";
	} else if (index === 1) {
		window.location.href = "/servicos";
	} else if (index === 2) {
		window.location.href = "/sobrenos";
	} else if (index === 3) {
		window.location.href = "/contato";
	}
};
const Navbar = () => {
	const isHomePage = window.location.pathname === "/";

	console.log("isHomePage>", isHomePage);
	return (
		<Root isHomePage={isHomePage}>
			<Container>
				<div style={{ marginBottom: "10px" }}>
					<img
						src={Logo}
						alt="Logo"
						onClick={() => {
							window.location.href = "/";
						}}
						style={{ cursor: "pointer" }}
					/>
				</div>
				<Menu>
					{categorias.map((item, index) => {
						return <Btn onClick={() => toPage({ index })}>{item}</Btn>;
					})}
				</Menu>
				<MenuMobile>
					<MenuIcon style={{ cursor: "pointer" }} />
				</MenuMobile>
			</Container>
		</Root>
	);
};

export default Navbar;
