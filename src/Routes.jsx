import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Navbar from'./components/Navbar/';
import Home from './pages/Home/';
import Cards from './pages/Cards/';

export default function Routes() {

	return (
		<BrowserRouter>

			<Navbar/>

			<Switch>
                <Route path="/" exact component={Home}/>
				<Route path="/cartas" exact component={Cards}/>

			</Switch>

		</BrowserRouter>

	);

}