import React from 'react';
import {
	MinusOutlined,
	PlusOutlined,
	ShoppingOutlined,
} from '@ant-design/icons';
import { Button, Card, Col, Input, Row } from 'antd';

import { Link } from 'react-router-dom';

const { Meta } = Card;

const Products = () => {
	return (
		<div style={{ margin: 50 }}>
			<h2>Categories</h2>
			<Row gutter={16} style={{ marginBottom: 15, fontWeight: 'bold' }}>
				<Col span={3}>
					<Card style={{ border: '1px solid #25AAE1', color: '#25AAE1' }}>
						FRUITES & VEGETABLES
					</Card>
				</Col>
				<Col span={3}>
					<Card>FRUITES & VEGETABLES</Card>
				</Col>
				<Col span={3}>
					<Card>FRUITES & VEGETABLES</Card>
				</Col>
			</Row>
			<Row gutter={16}>
				{['1', '2', '3', '4', '5', '6'].map((item, index) => (
					<Col span={6} key={index} style={{ marginBottom: 20 }}>
						<Link to='/item'>
							<Card
								hoverable
								cover={<img alt='example' src='/img/tomato.png' />}
							>
								<div style={{ marginBottom: 20 }}>Tomato</div>
								<Meta title='Rs. 120/- Per kg' />
								<Row style={{ marginTop: 15 }}>
									<Col span={16}>
										<Row>
											<Col span={4}>
												<Button
													size='large'
													block
													icon={<MinusOutlined />}
												></Button>
											</Col>
											<Col span={10}>
												<Input
													style={{ height: '100%', textAlign: 'center' }}
													value={1}
												/>
											</Col>
											<Col span={4}>
												<Button
													size='large'
													block
													icon={<PlusOutlined />}
												></Button>
											</Col>
										</Row>
									</Col>
									<Col span={8}>
										<Button
											size='large'
											style={{ background: '#25AAE1' }}
											icon={<ShoppingOutlined />}
										></Button>
									</Col>
								</Row>
							</Card>
						</Link>
					</Col>
				))}
			</Row>
		</div>
	);
};

export default Products;
