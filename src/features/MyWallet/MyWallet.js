import React from 'react';
import {
	LogoutOutlined,
	SearchOutlined,
	UnorderedListOutlined,
	UserOutlined,
	WalletFilled,
	WalletOutlined,
} from '@ant-design/icons';
import { Card, Col, Divider, Row, Input, Button, Checkbox, Form } from 'antd';
import { Link } from 'react-router-dom';

const { Meta } = Card;

const MyWallet = () => {
	return (
		<div style={{ padding: 50 }}>
			<Row gutter={32}>
				<Col span={5}>
					<Card>
						<div style={{ fontWeight: 'normal', fontSize: 16 }}>
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
						<div style={{ fontWeight: 'bold', fontSize: 16 }}>
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
							<div
								style={{
									fontSize: 30,
									fontWeight: 'bold',
									//	textAlign: 'center',
								}}
							>
								My Wallet
							</div>
						</div>
						<Divider />
						<Row>
							<Col span={11}>
								<div style={{ fontSize: 18 }}>How KUDZOKA PAY works?</div>
								<Card style={{ marginTop: 5 }}>
									<Checkbox style={{ fontSize: 18 }}>
										Add your credit / debit card
									</Checkbox>
								</Card>
								<Card style={{ marginTop: 5 }}>
									<Checkbox style={{ fontSize: 18 }}>
										Add credit though a voucher code
									</Checkbox>
								</Card>
								<Card style={{ marginTop: 5 }}>
									<Checkbox style={{ fontSize: 18 }}>Send credit</Checkbox>
								</Card>
							</Col>
							<Col span={2} style={{ textAlign: 'center' }}>
								<Divider type='vertical' style={{ height: '100%' }} />
							</Col>
							<Col span={11}>
								<div
									style={{
										fontSize: 18,
										fontWeight: 'bold',
										textAlign: 'center',
										marginBottom: 10,
									}}
								>
									Add Card Detail
								</div>
								<Row>
									<Col span={24}>
										<Form layout='vertical'>
											<Form.Item
												label='Enter Card Number'
												//tooltip='This is a required field'
											>
												<Input placeholder='1284-XXXX-XXXX-XX' size='large' />
											</Form.Item>
										</Form>
									</Col>
								</Row>
								<Row gutter={16}>
									<Col span={12}>
										<Form layout='vertical'>
											<Form.Item
												label='Expiry Date'
												tooltip='This is a required field'
											>
												<Input placeholder='22-10-2020' size='large' />
											</Form.Item>
										</Form>
									</Col>
									<Col span={12}>
										<Form layout='vertical'>
											<Form.Item label='CVV' tooltip='This is a required field'>
												<Input placeholder='1234' size='large' />
											</Form.Item>
										</Form>
									</Col>
								</Row>
								<Button
									block
									size='large'
									style={{ background: '#25AAE1', color: '#fff' }}
								>
									Add Card
								</Button>
							</Col>
						</Row>
					</Card>
				</Col>
			</Row>
		</div>
	);
};

export default MyWallet;
