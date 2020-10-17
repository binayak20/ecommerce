import React from 'react';
import { Col, Row } from 'antd';
import {
	ShopOutlined,
	PhoneOutlined,
	ClockCircleOutlined,
} from '@ant-design/icons';
import ImageComponent from '../../../component/ImageComponent';

const StoreInfo = () => {
	return (
		<div style={{ background: '#F7F7F7', padding: 50 }}>
			<Row>
				<Col span={12}>
					<div className='store-info'>
						<ShopOutlined />
						<span style={{ marginLeft: 5 }}>Super Store</span>
					</div>
					<div className='store-info'>
						<PhoneOutlined /> 01940-523661
					</div>
					<div className='store-info'>
						<ClockCircleOutlined /> 01:00am - 09 : 00pm
					</div>
				</Col>
				<Col span={12}>
					<ImageComponent src='/img/storeImage.png' />
				</Col>
			</Row>
		</div>
	);
};

export default StoreInfo;
