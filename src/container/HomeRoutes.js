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
	{
		path: PRIVATE_ROUTE.MYORDER,
		component: lazy(() => import('../pages/MyOrder')),
		exact: true,
	},
	{
		path: PRIVATE_ROUTE.MYWALLET,
		component: lazy(() => import('../pages/MyWallet')),
		exact: true,
	},
	{
		path: PRIVATE_ROUTE.STORETWO,
		component: lazy(() => import('../pages/StoreOne')),
		exact: true,
	},
	{
		path: PRIVATE_ROUTE.MYWALLETTWO,
		component: lazy(() => import('../pages/MyWalletTwo')),
		exact: true,
	},
];

export default function AppRouter() {
	return (
		<Suspense fallback={<Spin />}>
			<Switch>
				{routes.map((route, idx) => (
					<Route exact={route.exact} key={idx} path={`/${route.path}`}>
						<route.component />
					</Route>
				))}
			</Switch>
		</Suspense>
	);
}
