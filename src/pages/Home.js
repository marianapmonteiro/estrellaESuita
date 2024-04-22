import React, {useRef} from "react";
import Slider from "../components/Home/Slider";
import QuemSomos from "../components/Home/QuemSomos";
import Servicos from "../components/Home/Servicos";
import Depoimentos from "../components/Home/Depoimentos";
import Contato from "../components/Home/Contato";

const Home = () => {
	  const aboutRef = useRef(null);

	return (
		<>
			<section>
				<Slider nextSectionRef={aboutRef} />
			</section>
			<section ref={aboutRef}>
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
