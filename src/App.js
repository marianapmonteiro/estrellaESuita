import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import theme from "./Theme";
import router from "./Routes";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./index.css";

function App() {
	return (
		<ThemeProvider theme={theme}>
			<div className="App">
				<Navbar />
				<div className="page-wrap">
					<RouterProvider router={router} />
				</div>
				<Footer />
			</div>
		</ThemeProvider>
	);
}

export default App;
