import React from "react";
import PropTypes from "prop-types";

import "../Toast.scss";

const ToastsItem = props => {
	return (
		<>
			<div
				className=" col-lg-4 bg-second p-0 toast mx-1 mt-1 mb-1 show"
				role="alert"
				aria-live="assertive"
				aria-atomic="true">
				<div className="toast-header d-flex justify-content-end">
					<button
						type="button"
						className="btn-close"
						data-bs-dismiss="toast"
						aria-label="Close"></button>
				</div>
				<div className="toast-body d-flex">
					<div className="justify-content-start">
						<img src={props.imgToast} alt={props.altImg} />
					</div>
					<div>
						<p>{props.bodyToast}</p>
					</div>
					<p className="textAdd text-align-end">
						<strong>{props.price}</strong>
						<button className="btn add ">Amazon</button>
					</p>
				</div>
			</div>
		</>
	);
};

ToastsItem.propTypes = {
	imgToast: PropTypes.string,
	altImg: PropTypes.string,
	bodyToast: PropTypes.string,
	price: PropTypes.string
};

export default ToastsItem;
