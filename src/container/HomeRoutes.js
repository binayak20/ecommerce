import React, { lazy, Suspense } from 'react';
import { Spin } from 'antd';
import { Route, Switch } from 'react-router-dom';
import { PRIVATE_ROUTE } from '../router/routePaths';

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
	{
		path: PRIVATE_ROUTE.ITEM,
		component: lazy(() => import('../pages/Item')),
		exact: true,
	},
	{
		path: PRIVATE_ROUTE.CART,
		component: lazy(() => import('../pages/Cart')),
		exact: true,
	},
	{
		path: PRIVATE_ROUTE.ACCOUNT,
		component: lazy(() => import('../pages/MyAccount')),
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
