import React from 'react';

const Container = ({children}) => {
	return <div className='widgets'>
		{children}
	</div>;
};

export default Container;