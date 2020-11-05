import React from 'react';
import {
	LogoutOutlined,
	SearchOutlined,
	UnorderedListOutlined,
	UserOutlined,
	WalletFilled,
	WalletOutlined,
} from '@ant-design/icons';
import { Card, Col, Divider, Row, Form, Input, Button, Checkbox } from 'antd';
import SingleOrder from './SingleOrder';
import { Link } from 'react-router-dom';

const { Meta } = Card;
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

const MyOrder = () => {
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
						<div style={{ fontWeight: 'bold', fontSize: 16 }}>
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
								<Col span={10}></Col>
								<Col span={14}>
									<Row>
										<Col span={6}>
											<div
												style={{
													fontSize: 30,
													fontWeight: 'bold',
													//	textAlign: 'center',
												}}
											>
												My Order
											</div>
										</Col>
										<Col span={18}>
											<Input
												size='large'
												style={{ width: '100%' }}
												placeholder='Search Order by no..'
												prefix={<SearchOutlined />}
											/>
										</Col>
									</Row>
								</Col>
							</Row>
							<Card style={{ marginTop: 15 }}>
								<div
									style={{
										textAlign: 'center',
										fontSize: 18,
										color: '#25AAE1',
									}}
								>
									<Row>
										<Col span={4} />
										<Col span={8}>Inprogress Order (01)</Col>
										<Col span={8}>Previous Order (02)</Col>
										<Col span={4} />
									</Row>
								</div>
							</Card>
							<div style={{ padding: 30 }}>
								<Row gutter={32}>
									<Col span={6} style={{ marginBottom: 30 }}>
										<SingleOrder />
									</Col>
									<Col span={6}>
										<SingleOrder />
									</Col>
									<Col span={6}>
										<SingleOrder />
									</Col>
									<Col span={6}>
										<SingleOrder />
									</Col>
									<Col span={6}>
										<SingleOrder />
									</Col>
									<Col span={6}>
										<SingleOrder />
									</Col>
									<Col span={6}>
										<SingleOrder />
									</Col>
									<Col span={6}>
										<SingleOrder />
									</Col>
								</Row>
							</div>
						</div>
					</Card>
				</Col>
			</Row>
		</div>
	);
};

export default MyOrder;
