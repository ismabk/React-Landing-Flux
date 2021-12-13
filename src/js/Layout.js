import React from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

import Home from "./view/Home/Home.jsx";
import Team from "./view/Team/Team.jsx";
import Santander from "./view/Ligas/Santander.jsx";

const Layout = () => {
	const basename = process.env.BASENAME || "";
	return (
		<div>
			<BrowserRouter basename={basename}>
				<Switch>
					<Route exact path="/">
						<Home />
					</Route>
					<Route exact path="/nuestro-equipo">
						<Team />
					</Route>
					<Route exact path="/santander">
						<Santander />
					</Route>
					<Route>
						<h1>Not found!</h1>
					</Route>
				</Switch>
			</BrowserRouter>
		</div>
	);
};

export default Layout;
