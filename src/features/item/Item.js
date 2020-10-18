import React from 'react';
import { Divider } from 'antd';
import StoreInfo from '../Stores/StoreInfo';
import RelatedItem from './RelatedItem';
import SingleItem from './SingleItem';

const Item = () => {
	return (
		<>
			<StoreInfo />
			<div style={{ padding: 50 }}>
				<SingleItem />
				<Divider />
				<RelatedItem />
			</div>
		</>
	);
};

export default Item;
