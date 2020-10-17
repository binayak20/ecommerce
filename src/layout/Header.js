import React from 'react';
import { Layout, Row, Col, Select, Button } from 'antd';
import TopbarWrapper from './HeaderStyle';
//import LandingPage from '../pages/Landing';

const { Option } = Select;

const { Header } = Layout;

const HeaderComponent = () => {
	return (
		<TopbarWrapper>
			<Header className='header shadow-long'>
				<Row type='flex' align='middle' gutter={[15, 0]}>
					<Col span={8}>
						<Select defaultValue='Karachi' style={{ width: 120 }}>
							<Option value='Karachi'>Karachi</Option>
						</Select>
					</Col>
					<Col span={8}>
						<div style={{ textAlign: 'center' }}>
							<img
								style={{ width: 150 }}
								src='/img/logo-green.png'
								alt='test'
							/>
						</div>
					</Col>
					<Col span={8}>
						<div style={{ float: 'right', fontWeight: 'bold' }}>
							<Button>Login</Button>
							<Button style={{ marginLeft: 10 }}>SignUp</Button>
						</div>
					</Col>
				</Row>
			</Header>
		</TopbarWrapper>
	);
};

export default HeaderComponent;
