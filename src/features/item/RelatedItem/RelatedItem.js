import React from 'react';
import { Button, Card, Col, Input, Row } from 'antd';
import {
	MinusOutlined,
	PlusOutlined,
	ShoppingOutlined,
} from '@ant-design/icons';
const { Meta } = Card;

const RelatedItem = () => {
	return (
		<div>
			<h2>Related Item</h2>
			<Row gutter={16}>
				{['1', '2', '3', '4'].map((item, index) => (
					<Col span={6} key={index} style={{ marginBottom: 20 }}>
						<Card hoverable cover={<img alt='example' src='/img/tomato.png' />}>
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
					</Col>
				))}
			</Row>
		</div>
	);
};

export default RelatedItem;
