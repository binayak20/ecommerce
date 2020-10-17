import React from 'react';
import { PlusOutlined, MinusOutlined } from '@ant-design/icons';
import { Card, Collapse, Row, Col, Checkbox } from 'antd';
const { Panel } = Collapse;
const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;
const vagitables = [
	'Tomato',
	'Potato',
	'Garlic',
	'Ginger',
	'Carrot',
	'Cucumber',
];
const ItemList = () => {
	const callback = (key) => {
		console.log(key);
	};
	const customExpandIcon = (props) => {
		if (props.isActive) {
			return <MinusOutlined />;
		} else {
			return <PlusOutlined />;
		}
	};
	return (
		<Card style={{ marginTop: 10 }}>
			<Collapse
				defaultActiveKey={['1']}
				onChange={callback}
				expandIconPosition='right'
				ghost
				expandIcon={(props) => customExpandIcon(props)}
			>
				<Panel
					header='Fruits'
					key='1'
					style={{ borderBottom: '1px solid #ddd' }}
				>
					{vagitables.map((item, index) => (
						<Row style={{ padding: '0px 10px 0px 10px' }} key={index}>
							<Col span={12}>
								<div style={{ padding: '5px' }}>{item}</div>
							</Col>
							<Col span={12}>
								<div style={{ float: 'right' }}>
									<Checkbox />
								</div>
							</Col>
						</Row>
					))}
				</Panel>
				<Panel
					header='Vagetables'
					key='2'
					style={{ borderBottom: '1px solid #ddd' }}
				>
					<div>{text}</div>
				</Panel>
				<Panel
					header='Bakery Items'
					key='3'
					style={{ borderBottom: '1px solid #ddd' }}
				>
					<div>{text}</div>
				</Panel>
				<Panel
					header='Food grain & Oil'
					key='4'
					style={{ borderBottom: '1px solid #ddd' }}
				>
					<div>{text}</div>
				</Panel>
				<Panel
					header='Beverages'
					key='5'
					style={{ borderBottom: '1px solid #ddd' }}
				>
					<div>{text}</div>
				</Panel>
				<Panel
					header='Frozen Food'
					key='6'
					style={{ borderBottom: '1px solid #ddd' }}
				>
					<div>{text}</div>
				</Panel>
				<Panel header='Non-Veg' key='7'>
					<div>{text}</div>
				</Panel>
			</Collapse>
		</Card>
	);
};

export default ItemList;
