import React from "react";
import PropTypes from "prop-types";

import "./Table.scss";

const Table = ({ ...props }) => {
	let arrNumRow = [];
	let numRow = 0;
	let matchDay = [];
	let maxi = 0;
	let matches = props.imgLig.length;
	props.imgLig.length % 4 == 0
		? (numRow = props.imgLig.length / 4)
		: (numRow = Math.floor(props.imgLig.length / 4) + 1);
	for (let i = 0; i < numRow; i++) {
		arrNumRow.push(i);
	}
	function minMax() {
		if (matches % 4 == 0) {
			return props.imgLig.slice(maxi, maxi + 4);
		} else {
			if ((numRow - 1) * 4 == maxi)
				return props.imgLig.slice(maxi, maxi + (matches % 4));
			else return props.imgLig.slice(maxi, maxi + 4);
		}
	}

	console.log(minMax());
	return (
		<>
			<table>
				<tbody>
					{arrNumRow.map((value, ji) => (
						<tr key={ji}>
							{
								((matchDay = minMax()),
								(maxi = maxi + 4),
								matchDay.map((val, i) => (
									<td key={i}>
										<img
											src={val.img1}
											width="60px"
											height="60px"
											alt="logo"
										/>
										<span> {val.res} </span>
										<img
											src={val.img2}
											width="60px"
											height="60px"
											alt="logo"
										/>
									</td>
								)))
							}
						</tr>
					))}
				</tbody>
			</table>
		</>
	);
};

Table.propTypes = {
	imgLig: PropTypes.array
};
export default Table;
