import React, { lazy, Suspense } from 'react';
import { Spin } from 'antd';
//import { useSelector } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { PRIVATE_ROUTE } from '../router/routePaths';
//import Loader from 'components/utility/loader';
//import { PRIVATE_ROUTE } from 'router';

//const NotFound = lazy(() => import('pages/NotFoundPage'));

const routes = [
	{
		path: PRIVATE_ROUTE.HOME,
		component: lazy(() => import('../pages/Landing')),
		exact: true,
	},
	{
		path: PRIVATE_ROUTE.STORE,
		component: lazy(() => import('../pages/Stores')),
		exact: true,
	},
];

export default function AppRouter() {
	//const { url } = useRouteMatch();
	// console.log(url);
	// console.log('hello');
	// const userPermissions = useSelector(
	// 	(state) => state.CurrentUser.info.permissions
	// );

	return (
		<Suspense fallback={<Spin />}>
			<Switch>
				{routes.map((route, idx) => (
					<Route exact={route.exact} key={idx} path={`/${route.path}`}>
						<route.component />
					</Route>
				))}
				{/* <Route component={NotFound} /> */}
			</Switch>
		</Suspense>
	);
}
