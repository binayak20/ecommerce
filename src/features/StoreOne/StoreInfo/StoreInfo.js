import { Col, Row } from 'antd';
import React from 'react';
import ImageComponent from '../../../component/ImageComponent';

const StoreInfo = () => {
	return (
		<div style={{ background: '#F7F7F7', padding: 50, textAlign: 'center' }}>
			<Row>
				<Col span={24}>
					<ImageComponent src='/img/storeImage.png' />
				</Col>
			</Row>
		</div>
	);
};

export default StoreInfo;
