import React from "react";
import Slider from "../components/Home/Slider";
import QuemSomos from "../components/Home/QuemSomos";
import Servicos from "../components/Home/Servicos";
import Depoimentos from "../components/Home/Depoimentos";
import Contato from "../components/Home/Contato";

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
			<section>
				<Contato />
			</section>
		</>
	);
};

export default Home;
