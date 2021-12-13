import React from "react";

import ToastsItem from "./Components/ToastItem.jsx";

import "./Toast.scss";

import helmet from "../../../img/img-shoei-casco.png";
import phone from "../../../img/image-phone.png";
import ps5 from "../../../img/estacion-de-recarga-ps5.png";

const Toasts = () => {
	return (
		<>
			<div className="container containerToast my-4">
				<div className="order row justify-content-center">
					<ToastsItem
						imgToast={helmet}
						altImg={"Casco"}
						bodyToast={
							"Casco Shark Spartan Pro versión limitada 2021. Pinlock incorporado."
						}
						price={"300€"}></ToastsItem>
					<ToastsItem
						imgToast={phone}
						altImg={"Samsung SFC"}
						bodyToast={
							"Nuevo móvil Samsung SFC, 16GB RAM, 256GB de memoria, 95468 MP. Colores Rojo o Azul."
						}
						price={"900€"}></ToastsItem>
					<ToastsItem
						imgToast={ps5}
						altImg={"Dualsense"}
						bodyToast={
							"Nueva estación de carga de mandos Dualsense. Con opción de carga rápida incluso enstandby."
						}
						price={"90€"}></ToastsItem>
				</div>
			</div>
		</>
	);
};

export default Toasts;
