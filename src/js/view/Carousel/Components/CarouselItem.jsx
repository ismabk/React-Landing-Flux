import React from "react";

import "../Carousel.scss";

import PropTypes from "prop-types";

const CarouselItem = props => {
	return (
		<div className={props.classCarousel} data-bs-interval="10000">
			<img
				src={props.imgCarousel}
				className="d-block w-50"
				alt={props.altImage}
			/>
			<div className="carousel-caption ">
				<span className="text-carrusel title bg-text m-auto w-75">
					{props.contenCarousel}
				</span>
				<p className="text-carrusel w-50 m-auto bg-text d-none d-md-block">
					{props.textCarousel}
				</p>
			</div>
		</div>
	);
};

CarouselItem.propTypes = {
	classCarousel: PropTypes.string,
	imgCarousel: PropTypes.string,
	altImage: PropTypes.string,
	contenCarousel: PropTypes.string,
	textCarousel: PropTypes.string
};

export default CarouselItem;
