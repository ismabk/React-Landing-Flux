import React from "react";
import { Link } from "react-router-dom";

import logo from "../../../img/logo-removebg-sin bordes.png";
import laliga from "../../../img/laliga-santander-v-removebg-preview.png";
import laLigaSmart from "../../../img/laliga-smartbank-logo-vector-removebg-preview.png";
import premier from "../../../img/1200px-Logotip_Premier_League.svg-removebg-preview.png";
import serieA from "../../../img/i-removebg-preview.png";
import ligue1 from "../../../img/Ligue1_Uber_Eats_logo-removebg-preview.png";
import bundesliga from "../../../img/Bundesliga-Logo-2010-removebg-preview.png";

import "./Header.scss";

const HeaderT = () => {
	return (
		<nav className="navbar navbar-expand-lg navbar-light bg-first">
			<div className="container-fluid">
				<a className="navbar-brand d-md-flex" href="#">
					<Link to="/">
						<div className="ms-2 ">
							<img
								width="100px"
								height="75px"
								src={logo}
								alt=""
							/>
						</div>
					</Link>
				</a>
				<button
					className="navbar-toggler navbar-dark:"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarNavDropdown"
					aria-controls="navbarNavDropdown"
					aria-expanded="false"
					aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>
				<div
					className="collapse navbar-collapse justify-content-end"
					id="navbarNavDropdown">
					<ul className="navbar-nav d-flex align-items-center">
						<li className="nav-item mx-1">
							<a
								className="nav-link active c-blanco ahover"
								aria-current="page"
								href="#">
								<Link to="/santander">
									<div className=" ">
										<img
											width="75px"
											height="75px"
											src={laliga}
											alt=""
										/>
									</div>
								</Link>
							</a>
						</li>
						<li className="nav-item mx-1">
							<a className="nav-link c-blanco ahover" href="#">
								<div className=" ">
									<img
										width="108px"
										height="60px"
										src={laLigaSmart}
										alt=""
									/>
								</div>
							</a>
						</li>
						<li className="nav-item mx-1">
							<a className="nav-link c-blanco ahover" href="#">
								<div className=" ">
									<img
										width="84px"
										height="35px"
										src={premier}
										alt=""
									/>
								</div>
							</a>
						</li>
						<li className="nav-item mx-1">
							<a className="nav-link c-blanco ahover" href="#">
								<div className=" ">
									<img src={serieA} alt="" />
								</div>
							</a>
						</li>
						<li className="nav-item mx-1">
							<a className="nav-link c-blanco ahover" href="#">
								<div className=" ">
									<img src={ligue1} alt="" />
								</div>
							</a>
						</li>
						<li className="nav-item mx-1">
							<a className="nav-link c-blanco ahover" href="#">
								<div className=" ">
									<img src={bundesliga} alt="" />
								</div>
							</a>
						</li>
						<li className="nav-item mx-4">
							<a className="nav-link c-blanco  aahover" href="#">
								<i className="me-2 fas fa-globe-europe"></i>ESP
							</a>
						</li>
						<li className="nav-item mx-4 dropdown">
							<a
								className="nav-link dropdown-toggle c-blanco aahover"
								href="#"
								id="navbarDropdownMenuLink"
								role="button"
								data-bs-toggle="dropdown"
								aria-expanded="false">
								Acceso
							</a>
							<ul
								className="dropdown-menu"
								aria-labelledby="navbarDropdownMenuLink">
								<li>
									<a className="dropdown-item" href="#">
										Log in
									</a>
								</li>
								<li>
									<a className="dropdown-item" href="#">
										Registrarse
									</a>
								</li>
								<li>
									<a className="dropdown-item" href="#">
										Opciones
									</a>
								</li>
							</ul>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default HeaderT;
