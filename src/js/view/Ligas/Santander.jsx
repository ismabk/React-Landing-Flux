import React from "react";
import HeaderT from "../Header/Header.jsx";
import SantanderCardItem from "./Components/SantanderCardItem.jsx";
import Toasts from "../Toast/Toast.jsx";
import Footer from "../Footer/Footer.jsx";

const Santander = () => {
	return (
		<>
			<HeaderT></HeaderT>
			<SantanderCardItem></SantanderCardItem>
			<Toasts></Toasts>
			<Footer></Footer>
		</>
	);
};

export default Santander;
