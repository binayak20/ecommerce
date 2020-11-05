import {
	LogoutOutlined,
	UnorderedListOutlined,
	UserOutlined,
	WalletFilled,
	WalletOutlined,
} from '@ant-design/icons';
import { Card, Col, Divider, Row, Form, Input, Button, Checkbox } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';
const layout = {
	labelCol: {
		span: 8,
	},
	wrapperCol: {
		span: 16,
	},
};
const tailLayout = {
	wrapperCol: {
		offset: 8,
		span: 16,
	},
};

const MyAccount = () => {
	return (
		<div style={{ padding: 50 }}>
			<Row gutter={32}>
				<Col span={5}>
					<Card>
						<div style={{ fontWeight: 'bold', fontSize: 16 }}>
							<Link to='/my-account'>
								<UserOutlined style={{ color: '#25AAE1' }} />
								<span className='sidebar-menu'>My Account</span>
							</Link>
						</div>
						<Divider />
						<div style={{ fontWeight: 'normal', fontSize: 16 }}>
							<Link to='/my-order'>
								<UnorderedListOutlined style={{ color: '#25AAE1' }} />
								<span className='sidebar-menu'>My Order</span>
							</Link>
						</div>
						<Divider />
						<div style={{ fontWeight: 'normal', fontSize: 16 }}>
							<Link to='/my-wallet'>
								<WalletOutlined style={{ color: '#25AAE1' }} />
								<span className='sidebar-menu'>My Wallet</span>
							</Link>
						</div>
						<Divider />
						<div style={{ fontWeight: 'normal', fontSize: 16 }}>
							<Link to='/'>
								<LogoutOutlined style={{ color: '#25AAE1' }} />
								<span className='sidebar-menu'>Logout</span>
							</Link>
						</div>
					</Card>
				</Col>
				<Col span={19}>
					<Card>
						<div style={{ textAlign: 'center' }}>
							<Row>
								<Col span={7}></Col>
								<Col span={10}>
									<div style={{ fontSize: 30, fontWeight: 'bold' }}>
										My Account
									</div>
									<Divider />
									<Form
										{...layout}
										name='basic'
										initialValues={{
											remember: true,
										}}
										// onFinish={onFinish}
										// onFinishFailed={onFinishFailed}
									>
										<Form.Item label='User Name' name='username'>
											<Input size='large' />
										</Form.Item>
										<Form.Item label='Email Address' name='email'>
											<Input size='large' />
										</Form.Item>
										<Form.Item label='Mobile Number' name='mobile'>
											<Input size='large' />
										</Form.Item>

										<Form.Item {...tailLayout}>
											<a>Change Password</a>
										</Form.Item>
										<Divider />
										<div style={{ float: 'right' }}>
											<Button htmlType='submit' size='large'>
												Cancel
											</Button>
											<Button
												//type='primary'
												style={{
													background: '#25AAE1',
													color: '#fff',
													marginLeft: 5,
												}}
												htmlType='submit'
												//	style={{ marginLeft: 5 }}
												size='large'
											>
												Update
											</Button>
										</div>
									</Form>
								</Col>

								<Col span={7}></Col>
							</Row>
						</div>
					</Card>
				</Col>
			</Row>
		</div>
	);
};

export default MyAccount;
