import React from 'react';
import { Col, Row } from 'antd';
import Items from './Left';
import Products from './Right';

const StoreProducts = () => {
	return (
		<div style={{ padding: 50 }}>
			<Row gutter={16}>
				<Col span={5}>
					<Items />
				</Col>
				<Col span={19}>
					<Products />
				</Col>
			</Row>
		</div>
	);
};

export default StoreProducts;
