import React from "react";
import Slider from "../components/Home/Slider";
import QuemSomos from "../components/Home/QuemSomos";
import Servicos from "../components/Home/Servicos";
import Depoimentos from "../components/Home/Depoimentos";

const Home = () => {
	return (
		<>
			<section>
				{" "}
				<Slider />
			</section>
			<section>
				<QuemSomos />
			</section>
			<section>
				<Servicos />
			</section>
			<section>
				<Depoimentos />
			</section>
		</>
	);
};

export default Home;
