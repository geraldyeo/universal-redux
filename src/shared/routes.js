import React from 'react';
import { createHistory } from 'history';
import { Route } from 'react-router';
import App from 'components/index';
import Home from 'components/Home';

export default (
	<Route name="app" component={App} path="/">
		<Route component={Home} path="home"/>
	</Route>
);
