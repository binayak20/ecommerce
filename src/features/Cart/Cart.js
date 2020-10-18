import React from 'react';
import { List, Row, Col, Input, Button, Skeleton, Card, Divider } from 'antd';
import { DeleteOutlined, MinusOutlined, PlusOutlined } from '@ant-design/icons';
const data = [
	{
		title: 'LU Tiger Ticky Pack Box - 24 Pcs',
		name: 'Title 1',
	},
	{
		title: 'LU Tiger Ticky Pack Box - 24 Pcs',
		name: 'Title 2',
	},
	{
		title: 'LU Tiger Ticky Pack Box - 24 Pcs',
		name: 'Title 3',
	},
	{
		title: 'LU Tiger Ticky Pack Box - 24 Pcs',
		name: 'Title 4',
	},
];
const IncDecItem = () => {
	return (
		<Row style={{ marginTop: 15 }}>
			<Col span={9}>
				<Row>
					<Col span={4}>
						<Button size='large' block icon={<MinusOutlined />}></Button>
					</Col>
					<Col span={10}>
						<Input style={{ height: '100%', textAlign: 'center' }} value={1} />
					</Col>
					<Col span={4}>
						<Button size='large' block icon={<PlusOutlined />}></Button>
					</Col>
				</Row>
			</Col>
			<Col span={8}>
				<div style={{ fontSize: 25, color: 'red' }}>
					<DeleteOutlined />
				</div>
			</Col>
		</Row>
	);
};
const Cart = () => {
	return (
		<>
			<div style={{ background: '#F7F7F7', padding: 70 }}>
				<div className='cart-header'>Add To Cart</div>
			</div>
			<div style={{ padding: 50 }}>
				<Row gutter={16}>
					<Col span={16}>
						<Card>
							<List
								className='demo-loadmore-list'
								//	loading={initLoading}
								itemLayout='horizontal'
								//   loadMore={loadMore}
								dataSource={data}
								renderItem={(item) => (
									<List.Item
									// actions={[
									// 	<a key='list-loadmore-edit'>edit</a>,
									// 	<a key='list-loadmore-more'>more</a>,
									// ]}
									>
										{/* <Skeleton avatar title={false} loading={item.loading} active> */}
										<List.Item.Meta
											avatar={<img src='/img/tomato.png' />}
											title={<a href='https://ant.design'>{item.title}</a>}
											description={<IncDecItem />}
										/>
										<h2>Rs. 120/-</h2>
										{/* </Skeleton> */}
									</List.Item>
								)}
							/>
						</Card>
					</Col>
					<Col span={8}>
						<h2 className='center'>Summary</h2>
						<Card style={{ margin: 20 }}>
							<Row style={{ fontSize: 18 }}>
								<Col span={16}>
									<span className='summary-item'>Sub Total Rs.</span>
								</Col>
								<Col span={8}>
									<span className='summary-amount'>550/-</span>
								</Col>
							</Row>
							<Row style={{ fontSize: 18 }}>
								<Col span={16}>
									<span className='summary-item'>Delivery Charges</span>
								</Col>
								<Col span={8}>
									<span className='summary-amount'>150/-</span>
								</Col>
							</Row>
							<Divider />
							<Row style={{ fontSize: 18 }}>
								<Col span={16}>
									<span className='summary-item'>Sub Total Rs.</span>
								</Col>
								<Col span={8}>
									<span className='summary-amount'>700/-</span>
								</Col>
							</Row>
							<div style={{ textAlign: 'center', marginTop: 10 }}>
								<Button
									size='large'
									block
									style={{ background: '#25AAE1', color: '#fff' }}
									//icon={<ShoppingOutlined />}
								>
									Checkout
								</Button>
							</div>
						</Card>
					</Col>
				</Row>
			</div>
		</>
	);
};

export default Cart;
