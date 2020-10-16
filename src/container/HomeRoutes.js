import React, { lazy } from 'react';
//import { useSelector } from 'react-redux';
import { Route, useRouteMatch, Switch } from 'react-router-dom';
import Loader from 'components/utility/loader';
import { PRIVATE_ROUTE } from 'router';

//const NotFound = lazy(() => import('pages/NotFoundPage'));

const routes = [
	{
		path: PRIVATE_ROUTE.HOME,
		component: lazy(() => import('pages/LandingPage')),
		exact: true,
	},
];

export default function AppRouter() {
	const { url } = useRouteMatch();
	// const userPermissions = useSelector(
	// 	(state) => state.CurrentUser.info.permissions
	// );

	return (
		// <Suspense fallback={<Loader />}>
		<Switch>
			{routes.map((route) => (
				<Route
					key={route.path}
					exact={route.exact}
					path={`${url}/${route.path}`}
				>
					<route.component />
				</Route>
			))}
			{/* <Route component={NotFound} /> */}
		</Switch>
		// </Suspense>
	);
}
