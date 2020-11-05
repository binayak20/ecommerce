import React from 'react';
import { Row, Col, PageHeader, Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

const Landing = () => {
	return (
		<div style={{ padding: '40px 30px 0px' }}>
			<Row justify='space-around'>
				<Col span={12}>
					<PageHeader
						className='site-page-header'
						title='Our Stores'
						// breadcrumb={{ routes }}
						subTitle='Total Result Found 08'
					/>
				</Col>
				<Col span={12}>
					<div style={{ float: 'right' }}>
						<Input
							size='large'
							style={{ width: 200 }}
							placeholder='Search Store here..'
							prefix={<SearchOutlined />}
						/>
					</div>
				</Col>
			</Row>
			<Row justify='space-around'>
				<Col span={4}>
					<Link to='/store'>
						<img src='/img/shop 1.png' alt='alt' />
					</Link>
				</Col>
				<Col span={4}>
					<Link to='/store'>
						<img src='/img/shop 2.png' alt='alt' />
					</Link>
				</Col>
				<Col span={4}>
					<Link to='/store'>
						<img src='/img/shop 3.png' alt='alt' />
					</Link>
				</Col>
				<Col span={4}>
					<Link to='/store'>
						<img src='/img/shop 4.png' alt='alt' />
					</Link>
				</Col>
			</Row>
			<Row justify='space-around'>
				<Col span={4}>
					<Link to='/store'>
						<img src='/img/shop 5.png' alt='alt' />
					</Link>
				</Col>
				<Col span={4}>
					<Link to='/store'>
						<img src='/img/shop 6.png' alt='alt' />
					</Link>
				</Col>
				<Col span={4}>
					<Link to='/store'>
						<img src='/img/shop 7.png' alt='alt' />
					</Link>
				</Col>
				<Col span={4}>
					<Link to='/store'>
						<img src='/img/shop 8.png' alt='alt' />
					</Link>
				</Col>
			</Row>
		</div>
	);
};

export default Landing;
