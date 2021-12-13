import React from "react";
import { Link } from "react-router-dom";

import logo from "../../../img/logo-removebg-sin bordes.png";

import "./Footer.scss";

const Footer = () => {
	const months = new Array(
		"Enero",
		"Febrero",
		"Marzo",
		"Abril",
		"Mayo",
		"Junio",
		"Julio",
		"Agosto",
		"Septiembre",
		"Octubre",
		"Noviembre",
		"Diciembre"
	);
	const date = new Date();
	return (
		<>
			<div className="m-0 w-100 footer-position">
				<div className="row m-0">
					<div className="col-xs-12 col-sm-12 col-md-3 bg-first">
						<img
							src={logo}
							className="sizeLogo1"
							alt="Logo FutVar"
						/>
					</div>
					<div className="col-xs-12 col-sm-12 col-md-6 bg-first d-flex justify-content-center align-items-center">
						<div>
							<div className="text-center">
								<i className="fas fa-copyright"></i>
								{months[date.getMonth()] +
									date.getFullYear()}{" "}
								FutVar Unidad Editorial Información Deportiva
								S.L. Todos los derecechos reservados
							</div>
							<div className="text-center mt-2 px-2">
								<a className="me-3 ahover" href="#">
									Terminos y condiciones de Uso
								</a>
								<a className="me-3 ahover" href="#">
									Política de privacidad
								</a>
								<a className="me-3 ahover" href="#">
									Politica de cookies
								</a>
								<a className="me-3 ahover" href="#">
									Contacto
								</a>
								<Link className="ahover" to="/nuestro-equipo">
									Nuestro Equipo
								</Link>
							</div>
							<div className="text-center mt-2 mb-4">
								<i className="fab fa-facebook-f me-4 colorF socialhover"></i>
								<i className="fab fa-twitter me-4 colorT socialhover"></i>
								<i className="fab fa-instagram colorI socialhover"></i>
							</div>
						</div>
					</div>
					<div className="col-xs-12 col-sm-12 col-md-3 bg-first center-sm center-end">
						<img
							src={logo}
							className="sizeLogo2 float-end align-self-end"
							alt="Logo FutVar"
						/>
					</div>
				</div>
			</div>
		</>
	);
};

export default Footer;
