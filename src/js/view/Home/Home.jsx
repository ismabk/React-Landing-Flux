import React from "react";

import HeaderT from "../Header/Header.jsx";
import Carousel from "../Carousel/Carousel.jsx";
import Cards from "../Card/Card.jsx";
import Toasts from "../Toast/Toast.jsx";
import Accordion from "../Accordion/Accordion.jsx";
import Footer from "../Footer/Footer.jsx";

const Home = () => {
	return (
		<>
			<HeaderT></HeaderT>
			<Carousel></Carousel>
			<Cards></Cards>
			<Toasts></Toasts>
			<Accordion></Accordion>
			<Footer></Footer>
		</>
	);
};

export default Home;
