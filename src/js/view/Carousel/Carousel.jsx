import React from "react";

import CarouselItem from "./Components/CarouselItem.jsx";

import "./Carousel.scss";

import messi from "../../../img/messi2.jpg";
import mbappe from "../../../img/mbappe-2.jpg";
import cr7 from "../../../img/ronaldo.jpg";

const Carousel = () => {
	return (
		<>
			<div
				id="carouselExampleDark"
				className="my-3 w-carousel carousel carousel-dark m-auto w-50 slide"
				data-bs-ride="carousel">
				<div className="carousel-indicators">
					<button
						type="button"
						data-bs-target="#carouselExampleDark"
						data-bs-slide-to="0"
						className="active"
						aria-current="true"
						aria-label="Slide 1"></button>
					<button
						type="button"
						data-bs-target="#carouselExampleDark"
						data-bs-slide-to="1"
						aria-label="Slide 2"></button>
					<button
						type="button"
						data-bs-target="#carouselExampleDark"
						data-bs-slide-to="2"
						aria-label="Slide 3"></button>
				</div>
				<div className="carousel-inner">
					<CarouselItem
						classCarousel={"carousel-item active"}
						imgCarousel={messi}
						altImage={"Messi al Betis"}
						contenCarousel={"Messi al Betis"}
						textCarousel={
							"Messi se va al Betis para retirarse bebiendo rebujito y disfrutando del buen clima."
						}></CarouselItem>
					<CarouselItem
						classCarousel={"carousel-item"}
						imgCarousel={mbappe}
						altImage={"Mbappe Navidad"}
						contenCarousel={"Mbappe Papá Noel"}
						textCarousel={
							"Mbappe sorprendió a los niños haciéndose pasar por Papá Noel durante el último partido."
						}></CarouselItem>
					<CarouselItem
						classCarousel={"carousel-item"}
						imgCarousel={cr7}
						altImage={"Cristiano Ronaldo"}
						contenCarousel={"Ronaldo asustado"}
						textCarousel={
							"Desde que toma soja los niveles de estrógenos	han aumentado en Cristiano y se asusta por cualquier cosa."
						}></CarouselItem>
				</div>
				<button
					className="carousel-control-prev"
					type="button"
					data-bs-target="#carouselExampleDark"
					data-bs-slide="prev">
					<span
						className="carousel-control-prev-icon"
						aria-hidden="true"></span>
					<span className="visually-hidden">Previous</span>
				</button>
				<button
					className="carousel-control-next"
					type="button"
					data-bs-target="#carouselExampleDark"
					data-bs-slide="next">
					<span
						className="carousel-control-next-icon"
						aria-hidden="true"></span>
					<span className="visually-hidden">Next</span>
				</button>
			</div>
		</>
	);
};

export default Carousel;
