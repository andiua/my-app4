import React from 'react';
import {MainPage, CartPage} from '../pages';
import AppHeader from '../app-header';
import WithRestoService from '../hoc';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Background from './food-bg.jpg';

const App = ({RestoService}) => {
	RestoService.getMenuItems()
	.then(menu => console.log(menu))
	.catch(err => console.log(`Помилка: ${err}`))
    return (
			<Router>
				<div style={{background: `url(${Background}) center center/cover no-repeat`}} className="app">
					<AppHeader total={50}/>
					<Switch>
						<Route path='/' exact component={MainPage}/>
						<Route path='/cart' component={CartPage}/>
						<Route component={MainPage}/>
					</Switch>
        </div>
			</Router>
    )
}

export default WithRestoService()(App); 