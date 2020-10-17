import { SearchOutlined } from '@ant-design/icons';
import { Input } from 'antd';
import React from 'react';

const SearchItem = () => {
	return (
		<Input
			size='large'
			style={{ width: '100%' }}
			placeholder='Search Item here..'
			prefix={<SearchOutlined />}
		/>
	);
};

export default SearchItem;
