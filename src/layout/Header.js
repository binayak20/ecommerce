/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from 'react';
import { Layout, Row, Col, Select, Button, Menu, Dropdown, Badge } from 'antd';
import TopbarWrapper from './HeaderStyle';
//import LandingPage from '../pages/Landing';
import {
	DownOutlined,
	ShoppingCartOutlined,
	ShoppingOutlined,
} from '@ant-design/icons';
import { Link, useHistory, useLocation } from 'react-router-dom';

const { Option } = Select;

const { Header } = Layout;
function secondColor(url) {
	if (url === '/store-one' || url === '/my-wallet-two') return 1;
	return 0;
}
const HeaderComponent = () => {
	const [isLogin, setLogin] = useState(false);
	let { pathname } = useLocation();
	let history = useHistory();
	console.log(pathname);
	const login = () => {
		localStorage.setItem('isLogin', true);
		window.location.reload();
	};
	const logout = () => {
		localStorage.setItem('isLogin', false);
		history.push('/');
		window.location.reload();
	};
	useEffect(() => {
		setLogin(localStorage.getItem('isLogin') || false);
	}, []);
	//	console.log(typeof isLogin);
	const menu = (
		<Menu>
			<Menu.Item key='0'>
				<Link to='/my-account'>My Account</Link>
			</Menu.Item>
			<Menu.Item key='1'>
				<a onClick={() => logout()}>Logout</a>
			</Menu.Item>
		</Menu>
	);
	return (
		<TopbarWrapper>
			<Header
				className='header shadow-long'
				style={{
					background: secondColor(pathname) === 1 ? '#25AAE1' : '',
					color: secondColor(pathname) === 1 ? '#fff' : '',
				}}
			>
				<Row type='flex' align='middle' gutter={[15, 0]}>
					<Col span={8}>
						<Select defaultValue='Karachi' style={{ width: 120 }}>
							<Option value='Karachi'>Karachi</Option>
						</Select>
					</Col>
					<Col span={8}>
						<div style={{ textAlign: 'center' }}>
							<img
								style={{ width: 150 }}
								src='/img/logo-green.png'
								alt='test'
							/>
						</div>
					</Col>
					<Col span={8}>
						<div style={{ float: 'right', fontWeight: 'bold' }}>
							{isLogin === false ||
								(isLogin === 'false' && (
									<>
										<Button onClick={() => login()}>Login</Button>
										<Button style={{ marginLeft: 10 }}>SignUp</Button>
									</>
								))}
						</div>
						{isLogin === true ||
							(isLogin === 'true' && (
								<Row>
									<Col span={8}></Col>
									<Col span={9}>
										<p>
											Balance Rs.{' '}
											<span style={{ fontSize: 20, fontWeight: 'bold' }}>
												2300/-
											</span>
										</p>
									</Col>
									<Col span={3}>
										<Badge count={1}>
											<ShoppingOutlined style={{ fontSize: 30 }} />
										</Badge>
									</Col>

									<Col span={4}>
										<Dropdown overlay={menu} trigger={['click']}>
											<a
												style={{
													color: secondColor(pathname) === 1 ? '#fff' : '',
												}}
												className='ant-dropdown-link'
												onClick={(e) => e.preventDefault()}
											>
												Basit <DownOutlined />
											</a>
										</Dropdown>
									</Col>
								</Row>
							))}
					</Col>
				</Row>
			</Header>
		</TopbarWrapper>
	);
};

export default HeaderComponent;
