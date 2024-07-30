import Image from 'next/image';
import React from 'react';
import Icon from './icon';
import SearchBar from './search';

const Header = () => {
	return (
		<div className="flex h-18 p-4 border-b shadow-thin-border">
			<Icon />
			<SearchBar />
		</div>
	);
};

export default Header;
