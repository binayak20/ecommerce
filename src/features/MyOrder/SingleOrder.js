import React from 'react';

import { Card } from 'antd';

const { Meta } = Card;
const SingleOrder = () => {
	return (
		<Card
			hoverable
			cover={
				<img
					style={{
						borderTop: '1px solid #f0f0f0',
						borderRight: '1px solid #f0f0f0',
						borderLeft: '1px solid #f0f0f0',
					}}
					alt='example'
					src='/img/shop.png'
				/>
			}
		>
			<div style={{ fontSize: 18 }}>
				Order no.
				<span style={{ fontWeight: 'bold' }}> 1425</span>
			</div>
			<div
				style={{
					fontSize: 16,
					color: '#707070',
					marginBottom: 10,
				}}
			>
				order 13 Items
			</div>
			<Meta title='Rs. 120/- ' />
			<a href='#' style={{ marginTop: 5, color: '#25AAE1' }}>
				See Details
			</a>
		</Card>
	);
};

export default SingleOrder;
