export const PUBLIC_ROUTE = {
	LANDING: '/',
	SIGN_IN: '/signin',
	FORGET_PASSWORD: '/forgotpassword',
	RESET_PASSWORD: '/resetpassword/:token/:email',
	USER_ACTIVATE: '/activate/:token/:email',
};

export const PRIVATE_ROUTE = {
	DASHBOARD: '/',
	HOME: '',
	STORE: 'store',
	ITEM: 'item',
	CART: 'cart',
	MYORDER: 'my-order',
	MYWALLET: 'my-wallet',
	ACCOUNT: 'my-account',
	STORE_ID_PARAM: ':storeId',
};
