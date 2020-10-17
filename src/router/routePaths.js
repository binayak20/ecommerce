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
	STORE_ID_PARAM: ':storeId',
};
