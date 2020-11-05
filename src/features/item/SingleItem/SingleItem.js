import React from 'react';
import { Breadcrumb, Button, Col, Input, Row } from 'antd';
import ImageComponent from '../../../component/ImageComponent';
import { MinusOutlined, PlusOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

const SingleItem = () => {
	return (
		<div>
			<Row gutter={16}>
				<Col span={8}>
					<ImageComponent src='/img/item.png' style={{ width: '100%' }} />
				</Col>
				<Col span={16}>
					<Breadcrumb>
						<Breadcrumb.Item>Grocery Store</Breadcrumb.Item>
						<Breadcrumb.Item>Bakery Item</Breadcrumb.Item>
						<Breadcrumb.Item>Biscuits</Breadcrumb.Item>
					</Breadcrumb>
					<div style={{ fontSize: 30, color: '#707070', marginTop: 10 }}>
						LU Tiger Ticky Pack Box – 24 Pcs
					</div>
					<div
						style={{
							fontSize: 30,
							color: '#000000',
							fontWeight: 'bold',
							marginTop: 10,
						}}
					>
						Rs. 120/-
					</div>
					<Row style={{ marginTop: 15 }}>
						<Col span={6}>
							<Row>
								<Col span={4}>
									<Button size='large' block icon={<MinusOutlined />}></Button>
								</Col>
								<Col span={10}>
									<Input
										style={{ height: '100%', textAlign: 'center' }}
										value={1}
									/>
								</Col>
								<Col span={4}>
									<Button size='large' block icon={<PlusOutlined />}></Button>
								</Col>
							</Row>
						</Col>
						<Col span={8}>
							<Link to='/cart'>
								<Button
									size='large'
									style={{ background: '#25AAE1', color: '#fff' }}
									//icon={<ShoppingOutlined />}
								>
									Add To Cart
								</Button>
							</Link>
						</Col>
					</Row>
					<div style={{ color: '#707070', marginTop: 10 }}>
						Biscuit is a term used for a variety of primarily flour-based baked
						food products. The term is applied to two distinct products. In
						North America, a biscuit is typically a soft, leavened quick bread,
						and is covered in the article Biscuit.
					</div>
				</Col>
			</Row>
		</div>
	);
};

export default SingleItem;
