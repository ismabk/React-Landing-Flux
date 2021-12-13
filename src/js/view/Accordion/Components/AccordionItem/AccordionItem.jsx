import React from "react";
import PropTypes from "prop-types";

import Table from "../TableItem/Table.jsx";

const AccordionItem = ({ ...props }) => {
	return (
		<>
			<div className="accordion-item">
				<h2 className="accordion-header" id={props.heading}>
					<button
						className="accordion-button"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target={props.data}
						aria-expanded={props.ariaE}
						aria-controls={props.ariaC}>
						{props.button}
						<img className="ms-3" src={props.src} alt={props.alt} />
					</button>
				</h2>
				<div
					id={props.id1}
					className="accordion-collapse collapse"
					aria-labelledby={props.heading}>
					<div className="accordion-body d-flex justify-content-center">
						<Table {...props}></Table>
					</div>
				</div>
			</div>
		</>
	);
};

AccordionItem.propTypes = {
	button: PropTypes.string,
	src: PropTypes.string,
	alt: PropTypes.string,
	heading: PropTypes.string,
	id1: PropTypes.string,
	data: PropTypes.string,
	ariaE: PropTypes.string,
	ariaC: PropTypes.string
};

export default AccordionItem;
